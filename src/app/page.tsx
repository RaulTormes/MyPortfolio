"use client";

import { useState } from "react";
import { About } from "~/screen/About";
import { Footer } from "~/screen/Footer";
import { Home } from "~/screen/Home";
import { Projects } from "~/screen/Projects";
import { Skills } from "~/screen/Skills";

export default function App() {
  //
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  //
  const inputChange = (newValue: string) => {
    setInputValue(newValue);
  };
  //
  return (
    <main>
      <Home />
      <Projects />
      <About />
      <Skills />
      <Footer />
      {/* <Section title={"-------------------------"}>
        <Input value={inputValue} onChange={inputChange} label={"Email"} />
        <TextArea
          value={textAreaValue}
          onChange={setTextAreaValue}
          label={"Description"}
        />
        <Button label={"Contact me"} onClick={() => alert("clicado")} />
      </Section>
      <Section></Section>
      <Section flexDirection="row">
        <ProjectCard
          imageSource={require("../assets/screen.png")}
          linkLabel={"linkedin.com/raultormes"}
          onClick={() => alert("clicou aqui tambem")}
        />
        <ProjectCard
          imageSource={require("../assets/screen.png")}
          linkLabel={"linkedin.com/raultormes"}
          onClick={() => alert("clicou no segundo")}
        />
        <ProjectCard
          imageSource={require("../assets/screen.png")}
          linkLabel={"linkedin.com/raultormes"}
          onClick={() => alert("clicou aqui no 3")}
        />
        <TechIcon image={require("../assets/screen.png")} />
        <TechIcon image={require("../assets/screen.png")} />
        <TechIcon image={require("../assets/screen.png")} />
      </Section> */}
    </main>
  );
}
