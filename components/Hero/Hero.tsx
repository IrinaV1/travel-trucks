import Link from "next/link";
import css from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={css.hero}>
      <Image
        src="/hero.jpg"
        alt="Camper in a scenic landscape"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className={css.backgroundImage}
      />
      <div className={css.overlay} />
      <div className={`container ${css.content}`}>
        <div className={css.containerTitle}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.subtitle}>
            You can find everything you want in our catalog
          </p>
        </div>
        <Link className={`${css.link} a`} href="/catalog">
          View Now
        </Link>
        </div>
    </section>
  );
}
