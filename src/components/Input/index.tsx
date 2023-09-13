import React, { ChangeEvent } from "react";
import { InputComponent, LabelComponent } from "./styles";

interface InputProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

export const Input = ({ value, onChange, label }: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <>
      <LabelComponent>{label}</LabelComponent>
      <InputComponent type="email" value={value} onChange={handleInputChange} />
    </>
  );
};
