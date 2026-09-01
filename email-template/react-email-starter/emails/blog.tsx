import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";
import * as React from "react";

const baseUrl = "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com";

export const GooglePlayPolicyUpdateEmail = () => (
  <Html>
    <Head />
    <Preview>PulsePlay Digital Blog</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section>
          <Column>
            <Img
              style={sectionLogo}
              src={`${baseUrl}/PULSEPLAY_DIGITAL_LOGO.png`}
              width="150"
              height="50"
              alt="PulsePlay Logo"
            />
          </Column>
        </Section>

        <Section style={paragraphContent}>
          <Hr style={hr} />
          <Text style={heading}>BLOG UPDATE</Text>
          <Text style={paragraph}>Hello PulsePlay Digital Team,</Text>

          <Text style={paragraph}>
            I hope this email finds you well. We're excited to inform you that
            Rahul Guleria has just added a new blog post to our website, and we
            invite you to check it out! We've added clarifications to our{" "}
          </Text>
        </Section>

        <Section
          style={{ ...paddingX, paddingTop: "40px", paddingBottom: "40px" }}
        >
          <Row>
            <Column>
              <Img
                src={`${baseUrl}/PulsePlay_website_WorkHome_SBUP.webp`}
                alt="Brazil 2022/23 Stadium Away Women's Nike Dri-FIT Soccer Jersey"
                style={{ float: "left", objectFit: "cover" }}
                width="260px"
                height={"200px"}
              />
            </Column>
            <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
              <Text style={{ ...paragraph, fontWeight: "500" }}>
                How we used 3D Avatars in Pulseplay Digital Website using WebGL
                and ThreeJs
              </Text>
              <Text>
                RAHUL GULERIA <br /> NOVEMBER 29, 2023
              </Text>
              <Button
                pX={20}
                pY={12}
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                href={""}
              >
                View Blog
              </Button>
            </Column>
          </Row>
          <Hr style={hr} />
        </Section>

        <Section style={paragraphList}>
          <Text style={paragraph}>
            Additionally, if any team member would like to contribute their own
            blog post, we encourage you to do so. You can easily submit your
            blog through our admin panel. Simply log in at
            <Link href="https://admin.pulseplaydigital.com" style={link}>
              {" "}
              admin.pulseplaydigital.com
            </Link>{" "}
            and follow the easy steps to create and submit your content.
          </Text>
        </Section>
        <Section style={paragraphContent}>
          <Text style={paragraph}>
            Thank you for your continued contributions to our digital community.
            We look forward to reading your feedback on Rahul's blog and any
            future posts from our talented team.
          </Text>
          <Hr style={hr} />
        </Section>

        <Section style={paragraphContent}>
          <Text style={paragraph}>Thank you,</Text>
          <Text style={{ ...paragraph }}>PulsePlay Digital</Text>
        </Section>

        <Section style={containerContact}>
          <Text style={paragraph}>Connect with us</Text>
          <Row
            align="left"
            style={{
              width: "84px",
              float: "left",
            }}
          >
            <Column style={{ paddingRight: "4px" }}>
              <Link href="https://www.instagram.com/pulseplaydigital/">
                <Img
                  width="28"
                  height="28"
                  style={{ padding: "5px" }}
                  src={`${baseUrl}/20231130-xtyzq-instagram`}
                />
              </Link>
            </Column>
            <Column style={{ paddingRight: "4px" }}>
              <Link href="https://www.linkedin.com/company/pulseplaydigital">
                <Img
                  width="28"
                  height="28"
                  style={{ padding: "5px" }}
                  src={`${baseUrl}/20231130-z9crx-linkedin`}
                />
              </Link>
            </Column>
            <Column style={{ paddingRight: "4px" }}>
              <Link href="https://twitter.com/PulsePlayD">
                <Img
                  width="27"
                  height="27"
                  style={{ padding: "5px" }}
                  src={`${baseUrl}/20231130-ea33j-twitter`}
                />
              </Link>
            </Column>
          </Row>
          <Img
            width="540"
            height="48"
            src={`${baseUrl}/20231130-hs8bn-google-play-footer`}
          />
        </Section>

        <Section style={{ ...paragraphContent, paddingBottom: 30 }}>
          <Text
            style={{
              ...paragraph,
              fontSize: "12px",
              textAlign: "center",
              margin: 0,
            }}
          >
            © 2024 PulsePlay Digital Private Limited, Dharamshala, Himachal
            Pradesh 176215
          </Text>
          <Text
            style={{
              ...paragraph,
              fontSize: "12px",
              textAlign: "center",
              margin: 0,
            }}
          >
            Please do not share your credentials. This is PulsePlay Digital's
            exclusive CMS Admin panel for internal use only. Any unauthorized
            use will be punishable by law.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default GooglePlayPolicyUpdateEmail;

const main = {
  backgroundColor: "#dbddde",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const sectionLogo = {
  padding: "0 40px",
  paddingTop: "10px",
};

const headerBlue = {
  marginTop: "-1px",
};

const container = {
  margin: "30px auto",
  width: "610px",
  backgroundColor: "#fff",
  borderRadius: 5,
  overflow: "hidden",
};

const containerContact = {
  backgroundColor: "#f0fcff",
  width: "90%",
  borderRadius: "5px",
  overflow: "hidden",
  paddingLeft: "20px",
};

const heading = {
  fontSize: "14px",
  lineHeight: "26px",
  fontWeight: "700",
  color: "#004dcf",
};

const paragraphContent = {
  padding: "0 40px",
};

const paragraphList = {
  paddingLeft: 40,
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "22px",
  color: "#3c4043",
};

const link = {
  ...paragraph,
  color: "#004dcf",
};

const hr = {
  borderColor: "#e8eaed",
  margin: "20px 0",
};

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};
