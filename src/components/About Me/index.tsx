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
      <Container style={{ margin: "50px" }}>
        <Flex>
          <AboutMeWrapper>
            <AboutMeTitle id="about-me">Sobre mim</AboutMeTitle>
            <AboutMeStack>
              <Text></Text>
              <AboutMeStackTech>
                <Text></Text>
              </AboutMeStackTech>
            </AboutMeStack>
            <Text>
              Desde que era criança, sempre estive próximo a computadores e
              coisas do tipo. Trabalhei na área de TI por muitos anos e depois
              enfrentei os desafios de empreendedorismo, iniciando um novo
              negócio de customização de produtos. Utilizei muita tecnologia
              para construir e reconstruir os processos comerciais conforme
              necessário. Atualmente, continuo estudando essas tecnologias e
              linguagens para criar soluções ainda mais difíceis e complexas.
              <b>Veja meus protótipos:</b>
            </Text>
            <Text></Text>
            <AboutMeLinks>
              <Flex
                style={{
                  flexDirection: "column",
                  gap: "30px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
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
                >
                  Kenzie Burger "Ecommerce"
                </AboutMeLink>
              </Flex>
            </AboutMeLinks>
          </AboutMeWrapper>
        </Flex>
      </Container>
    </>
  );
};
