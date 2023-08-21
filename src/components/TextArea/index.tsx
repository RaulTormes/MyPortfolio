import React, { TextareaHTMLAttributes } from "react";
import { TextAreaComponent } from "./styles";

interface TextAreaProps {
  value: string;
  onChange: (newValue: string) => void;
}

export const TextArea = ({ value, onChange }: TextAreaProps) => {
  return (
    <TextAreaComponent
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
};
