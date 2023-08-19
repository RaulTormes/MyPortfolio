import React, { ChangeEvent } from "react";
import { InputComponent } from "./styles";

interface InputProps {
  value: string;
  onChange: (newValue: string) => void;
}

export const Input = ({ value, onChange }: InputProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
    console.log(value);
  };

  return (
    <InputComponent type="text" value={value} onChange={handleInputChange} />
  );
};
