"use client";

import { useState } from "react";
import { Button } from "~/components/Button";
import { Input } from "~/components/Input";
import { Section } from "~/components/Section";
import { TextArea } from "~/components/TextArea";
import { theme } from "~/styles/defaultTheme";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");

  const inputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  return (
    <main>
      <Section title={"<Projects>"}>
        <Input value={inputValue} onChange={inputChange} />
        <TextArea value={textAreaValue} onChange={setTextAreaValue} />
        <Button label={"Contact me"} onClick={() => alert("clicado")} />
      </Section>
      <Section
        height="50vh"
        title="<about me>"
        gradient={`${theme.colors.$reverseGradient}`}
      ></Section>
    </main>
  );
}
