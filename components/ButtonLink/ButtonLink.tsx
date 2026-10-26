import Link from "next/link";
import type { ComponentProps } from "react";
import css from "./ButtonLink.module.css"; 

type ButtonLinkProps = ComponentProps<typeof Link> & {
className?: string;
};

export default function ButtonLink({
children,
className,
...props
}: ButtonLinkProps) {
const classes = [css.btnLink, className].filter(Boolean).join(" ");

return (
<Link className={classes} {...props}>
{children}
</Link>
);
}