import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
import Social from "../social/Social";

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

const baseUrl = "https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com";

export const VercelInviteUserEmail = ({
  username = "Zenorocha",
  userImage = `${baseUrl}/static/vercel-user.png`,
  invitedByUsername = "bukinoshita",
  invitedByEmail = "bukinoshita@example.com",
  teamName = "My Project",
  teamImage = `${baseUrl}/static/vercel-team.png`,
  inviteLink = "https://vercel.com/teams/invite/foo",
  inviteFromIp = "204.13.186.218",
  inviteFromLocation = "São Paulo, Brazil",
}: VercelInviteUserEmailProps) => {
  const previewText = `Join ${invitedByUsername} on Vercel`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[500px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/PULSEPLAY_DIGITAL_LOGO.png`}
                width="150"
                height="50"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Welcome to <strong>PulsePlay Digital</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {username},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>{username},</strong> Welcome to PulsePlay Digital. Now see
              yourself in PulsePlay Digital website team section.
            </Text>
            <Section>
              <Img
                style={{ borderRadius: "50%", objectFit: "cover" }}
                src={`${baseUrl}/Pankaj.jpg`}
                width="100"
                height="100"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>

            <Section className="text-center mt-[10px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                href={inviteLink}
              >
                View Profile
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              or copy and paste this URL into your browser:{" "}
              <Link href={inviteLink} className="text-blue-600 no-underline">
                {inviteLink}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-black text-[14px] leading-[24px]">
              <Text>
                Your login credentials <br />
                <Link
                  href={"https://admin.pulseplaydigital.com/"}
                  className="text-blue-600 no-underline"
                >
                  https://admin.pulseplaydigital.com/
                </Link>
                <br />
                <strong>Use your personal or official email id.</strong>
                <br />
                Password: <strong>123456</strong>
                <Heading as="h4">or login as FaceID (beta)</Heading>
              </Text>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              Please do not share your credentials. This is PulsePlay Digital's
              exclusive CMS Admin panel for internal use only. Any unauthorized
              use will be punishable by law.
            </Text>

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Social fill="black" />
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VercelInviteUserEmail;
