import { Section } from "~/components/Section";
import ImageDefault from "~/assets/perfil.jpeg";
import { Container, Content, CvLink, ImageProfile, Text } from "./styles";

export const About = () => {
  return (
    <Section title="<About Me>">
      <Container>
        <ImageProfile
          src={ImageDefault}
          alt="Profile"
          width={350}
          height={350}
        />
        <Content>
          <Text>
            Hey, my name is Raul Tormes and Im a Front End Developer
            <br /> with a passion for technology.
            <br />
            <br />
            Ive worked on responsive and intuitive web applications,
            <br /> with a focus on usability and interface design. <br />
            To stay current with the latest trends and technologies in
            <br /> Front End Development,
            <br /> I am constantly updating my skills and knowledge.
          </Text>
          <CvLink href="../../../public/Raul-resume.pdf">
            Resume CV (pdf)
          </CvLink>
        </Content>
      </Container>
    </Section>
  );
};
