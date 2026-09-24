import axios from "axios";

interface SendEmailParams {
  email?: any;
  emaill?: any;
  subject?: any;
  content?: any;
  cc?: any;
  from?: any;
  attachments?: any;
  [key: string]: any;
}

const sendGridEmail = async (params: SendEmailParams) => {
  const { email, emaill, subject, content, cc, from, attachments } =
    params || {};
  try {
    const formatRecipients = (val: any): string[] => {
      if (!val) return [];
      if (Array.isArray(val)) {
        return val.map((e) => String(e).trim()).filter(Boolean);
      }
      if (typeof val === "string") {
        return val.split(",").map((e) => e.trim()).filter(Boolean);
      }
      return [String(val).trim()];
    };

    const toList = formatRecipients(email || emaill);
    const ccList = formatRecipients(cc);

    if (toList.length === 0) {
      console.warn("No recipient email specified for sendGridEmail");
      return;
    }

    let formattedAttachments: any[] | undefined = undefined;
    if (attachments) {
      if (Array.isArray(attachments)) {
        formattedAttachments = attachments;
      } else if (typeof attachments === "string") {
        const filename =
          attachments.split("/").pop()?.split("?")[0] || "attachment.pdf";
        formattedAttachments = [
          {
            path: attachments,
            filename: filename,
          },
        ];
      }
    }

    const senderFrom =
      from && from.includes("@pulseplay-updates.thrico.com")
        ? from
        : "PulsePlay Digital <updates@pulseplay-updates.thrico.com>";

    const payload: any = {
      from: senderFrom,
      to: toList,
      subject: subject,
      html: content,
    };

    if (from && !from.includes("@pulseplay-updates.thrico.com")) {
      payload.reply_to = from;
    }

    if (ccList.length > 0) {
      payload.cc = ccList;
    }

    if (formattedAttachments && formattedAttachments.length > 0) {
      payload.attachments = formattedAttachments;
    }

    const response = await axios.post("https://api.resend.com/emails", payload, {
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    console.log("Message sent via Resend API:", response.data?.id);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error sending email:",
      error.response?.data || error.message || error
    );
  }
};

export default sendGridEmail;

