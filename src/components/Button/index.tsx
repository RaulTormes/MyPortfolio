import React, { ButtonHTMLAttributes } from "react";
import { ButtonComponent } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}
export const Button = ({ label, ...rest }: ButtonProps) => {
  return <ButtonComponent {...rest}>{label}</ButtonComponent>;
};
