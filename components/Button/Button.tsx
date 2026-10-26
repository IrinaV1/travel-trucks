import type { ButtonHTMLAttributes, ReactNode } from "react";
import css from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  type?: "submit" | "button" | "reset";
  className?: string;
}

export default function Button({
  children,
  type = "button",
  disabled = false,
  className,
  ...props
}: ButtonProps) {
  const classes = [css.button, className].filter(Boolean).join(" ");

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
