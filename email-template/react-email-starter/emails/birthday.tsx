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
  return (
    <Html>
      <Head />

      <Tailwind>
        <Body
          style={{
            backgroundColor: " #f4f6fc",
          }}
          className="bg-white my-auto mx-auto font-sans"
        >
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
              <strong>
                Celebrating Prince Choudhary 1 year Work Anniversary🥂
              </strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]"></Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Congratulations! You’ve been with the PulsePlay Digital for 1 year
              this month. You have made a significant contribution to our
              department’s success during your time with us.
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

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              Sincerely,
              <br />
              Your PulsePlay Digital Team
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

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
