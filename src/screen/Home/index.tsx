import { Section } from "~/components/Section";
import { Button } from "~/components/Button";
import LinkedinIcon from "~/assets/Icons/linkedin.svg";
import WhatsappIcon from "~/assets/Icons/whatsapp.svg";
import GithubIcon from "~/assets/Icons/github.svg";
import ProfileImage from "~/assets/perfil.jpeg";
import {
  LeftContent,
  RightContent,
  Title,
  SubTitle,
  Text,
  ImageContent,
  CardWhite,
  CardGreen,
  ImageContainer,
  IconContainer,
  Icon,
} from "./styles";

export const Home = () => {
  return (
    <Section flexDirection="row">
      <LeftContent>
        <Title>Raul Tormes</Title>
        <SubTitle>Front-end Developer</SubTitle>
        <Text>
          "Genius is one percent inspiration and
          <br /> ninety-nine percent perspiration."
        </Text>
        <Button label={"Contact me"} onClick={() => alert("clicado")} />
      </LeftContent>
      <RightContent>
        <ImageContainer>
          <ImageContent src={ProfileImage} alt="Profile" />
          <CardWhite />
          <CardGreen />
        </ImageContainer>
        <IconContainer>
          <Icon src={LinkedinIcon} alt="linkedin icon" />
          <Icon src={WhatsappIcon} alt="Whatsapp icon" />
          <Icon src={GithubIcon} alt="Github icon" />
        </IconContainer>
      </RightContent>
    </Section>
  );
};
