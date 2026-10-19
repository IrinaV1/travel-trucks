import type { ButtonHTMLAttributes } from "react";
import css from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
className?: string;
}

export default function Button({
children,
type = "button",
className,
...props
}: ButtonProps) {
const classes = [css.btn, className].filter(Boolean).join(" ");

return (
<button type={type} className={classes} {...props}>
{children}
</button>
);
}