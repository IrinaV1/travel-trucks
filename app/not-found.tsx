import css from "./not-found.module.css";
import Image from "next/image";
import ButtonLink from "@/components/ButtonLink/ButtonLink";

export default function NotFound() {
  return (
    <div className={css.wrapper}>
      <Image
        src="/not-found.png"
        alt="Page not found"
        width={488}
        height={463}
        loading="eager"
        className={css.image}
      />
      <div className={css.wrapperText}>
        <h1 className={css.title}>Page Not Found</h1>
        <p className={css.text}>
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <p className={css.text}>It may have been moved or no longer exists.</p>
      </div>
      <ButtonLink href="/" className={css.btn}>
        Back to Home
      </ButtonLink>
    </div>
  );
}
