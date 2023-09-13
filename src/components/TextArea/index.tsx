import React, { TextareaHTMLAttributes } from "react";
import { TextAreaComponent } from "./styles";
import { LabelComponent } from "../Input/styles";

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

export const TextArea = ({ value, onChange, label }: TextAreaProps) => {
  return (
    <>
      <LabelComponent>{label}</LabelComponent>
      <TextAreaComponent
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </>
  );
};
