"use client";

import { useState } from "react";
import { Button } from "~/components/Button";
import { Input } from "~/components/Input";
import { Section } from "~/components/Section";
import { Skills } from "~/components/SkillComponent";
import { TextArea } from "~/components/TextArea";
import { theme } from "~/styles/defaultTheme";

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
      <Section title={"<Projects>"}>
        <Input value={inputValue} onChange={inputChange} label={"Email"} />
        <TextArea
          value={textAreaValue}
          onChange={setTextAreaValue}
          label={"Description"}
        />
        <Button label={"Contact me"} onClick={() => alert("clicado")} />
      </Section>
      <Section
        height="50vh"
        title="<about me>"
        flexDirection="row"
        flexWrap="wrap"
        gradient={`${theme.colors.$reverseGradient}`}
      >
        <Skills technology={"A"} level={3} />
        <Skills technology={"B"} level={3} />
        <Skills technology={"C"} level={4} />
        <Skills technology={"d"} level={4} />
        <Skills technology={"e"} level={2} />
        <Skills technology={"f"} level={3} />
        <Skills technology={"g"} level={3} />
        <Skills technology={"h"} level={3} />
        <Skills technology={"i"} level={3} />
      </Section>
      <Section>hey</Section>
    </main>
  );
}
