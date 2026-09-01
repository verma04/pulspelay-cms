const sgMail = require("@sendgrid/mail");
const sendEmail = (text: any, email: any, subject: any) => {
  console.log(text, email, subject);

  sgMail.setApiKey(
    process.env.SENDGRID_API_KEY || ""
  );

  const msg = {
    to: email, // Change to your recipient
    from: "info@pulseplaydigital.com", // Change to your verified sender
    subject: subject,
    html: text,
  };

  sgMail
    .send(msg)
    .then((response: any) => {
      console.log(response);
    })
    .catch((error: any) => {
      console.error(error);
    });
};

export default sendEmail;
