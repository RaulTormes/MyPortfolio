// import    from

import { ProjectCard } from "~/components/ProjectCard";
import { Section } from "~/components/Section";
import { TopContent } from "./styles";

export const Projects = () => {
  return (
    <Section title="<Projects>">
      <TopContent>
        <ProjectCard
          imageSource={require("../../assets/screen.png")}
          linkLabel={"linkedin.com/raultormes"}
          onClick={() => alert("clicou aqui tambem")}
        />
        <ProjectCard
          imageSource={require("../../assets/screen.png")}
          linkLabel={"linkedin.com/raultormes"}
          onClick={() => alert("clicou aqui tambem")}
        />
        <ProjectCard
          imageSource={require("../../assets/screen.png")}
          linkLabel={"linkedin.com/raultormes"}
          onClick={() => alert("clicou aqui tambem")}
        />
        <ProjectCard
          imageSource={require("../../assets/screen.png")}
          linkLabel={"linkedin.com/raultormes"}
          onClick={() => alert("clicou aqui tambem")}
        />
      </TopContent>
      <div></div>
    </Section>
  );
};
