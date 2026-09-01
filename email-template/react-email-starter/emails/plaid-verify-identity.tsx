import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface PlaidVerifyIdentityEmailProps {
  validationCode?: string;
}

const baseUrl = "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com";

export const PlaidVerifyIdentityEmail = ({
  validationCode = "144833",
}: PlaidVerifyIdentityEmailProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/PULSEPLAY_DIGITAL_LOGO.png`}
          width="150"
          height="50"
          alt="Plaid"
          style={logo}
        />

        <Heading style={secondary}></Heading>
        <Section style={codeContainer}>
          <Text style={code}>Weekly DataBase Backup</Text>
        </Section>

        <Text style={paragraph}>
          This email and any files transmitted with it are confidential and
          intended solely for the use of the individual or entity to whom they
          are addressed. If you have received this email in error, please notify
          the sender immediately and delete the email from your system. Any
          unauthorized use, disclosure, distribution, or reproduction of this
          communication is strictly prohibited and may be subject to legal
          action. The information contained in this email is for internal use
          only and may contain privileged or confidential information.
          Unauthorized use of this information is strictly prohibited and may
          result in legal consequences..
        </Text>
      </Container>
      <Text style={footer}></Text>
    </Body>
  </Html>
);

export default PlaidVerifyIdentityEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20,50,70,.2)",
  marginTop: "20px",
  width: "500px",
  margin: "0 auto",
  padding: "68px 0 60px",
};

const logo = {
  margin: "0 auto",
};

const tertiary = {
  color: "#0a85ea",
  fontSize: "11px",
  fontWeight: 700,
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  height: "16px",
  letterSpacing: "0",
  lineHeight: "16px",
  margin: "16px 8px 8px 8px",
  textTransform: "uppercase" as const,
  textAlign: "center" as const,
};

const secondary = {
  color: "#000",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Medium,Helvetica,Arial,sans-serif",
  fontSize: "20px",
  fontWeight: 500,
  lineHeight: "24px",
  marginBottom: "0",
  marginTop: "0",
  textAlign: "center" as const,
};

const codeContainer = {
  background: "rgba(0,0,0,.05)",
  borderRadius: "4px",
  margin: "16px auto 14px",
  verticalAlign: "middle",
  width: "400px",
};

const code = {
  color: "#000",
  display: "inline-block",
  fontFamily: "HelveticaNeue-Bold",
  fontSize: "32px",
  fontWeight: 700,
  letterSpacing: "6px",
  lineHeight: "40px",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: "0 auto",
  width: "100%",
  textAlign: "center" as const,
};

const paragraph = {
  color: "#444",
  fontSize: "15px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  letterSpacing: "0",
  lineHeight: "23px",
  padding: "0 40px",
  margin: "0",
  textAlign: "center" as const,
};

const link = {
  color: "#444",
  textDecoration: "underline",
};

const footer = {
  color: "#000",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "0",
  lineHeight: "23px",
  margin: "0",
  marginTop: "20px",
  fontFamily: "HelveticaNeue,Helvetica,Arial,sans-serif",
  textAlign: "center" as const,
  textTransform: "uppercase" as const,
};
