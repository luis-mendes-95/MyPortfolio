import {
  AboutMe as AboutMeWrapper,
  AboutMeTitle,
  AboutMeStack,
  AboutMeStackTech,
  AboutMeLink,
  AboutMeLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";
import { Container, Flex } from "@/styles/Global";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  html_url: string;
  homepage: string;
}

export const AboutMe = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos?sort=created&direction=desc`
      );

      const json = await data.json();

      setRepositories(json);

      return json;
    };

    fetchData();
  }, []);

  return (
    <>
      <Container style={{margin: "50px"}}>
        <Flex>
          <AboutMeWrapper>
            <AboutMeTitle id="about-me">About me</AboutMeTitle>
            <AboutMeStack>
              <Text></Text>
              <AboutMeStackTech>
                <Text></Text>
              </AboutMeStackTech>
            </AboutMeStack>
            <Text>
              Since i've been a kid, always been close to computers and stuff, I
              worked in IT area for long years, then I went to the entrepreneur
              challenges and started a new business of products customizations,
              and then I used a lot of tech to build and rebuild the business
              proccesses as it was needed. And nowadays i keep studying those
              techs and languages to keep building even harder and complexes
              solutions. <b>See my prototypes:</b>
            </Text>
            <Text></Text>
            <AboutMeLinks>
              <Flex style={{flexDirection: "column", gap: "30px", justifyContent: "center", alignItems: "center"}}>
              <AboutMeLink
                target="_blank"
                href={`https://${"project-01-luis-mendes-95.vercel.app/home/"}`}
              >
                MyCompany "Business Manager"
              </AboutMeLink>
              <AboutMeLink
                target="_blank"
                href={`https://${"mundo-do-rock-react-ts-luis-mendes-95.vercel.app/"}`}
              >
                Mundo do Rock "Sales Manager"
              </AboutMeLink>
              <AboutMeLink
                target="_blank"
                href={`https://${"react-entrega-hamburgueria-v2-luis-mendes-95.vercel.app/"}`}
              >Kenzie Burger "Ecommerce"
              </AboutMeLink>
              </Flex>
            </AboutMeLinks>
          </AboutMeWrapper>
        </Flex>
      </Container>
    </>
  );
};
