import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={`${css.headerContainer} container`}>
        <Link className={`${css.logo} a`} href="/" aria-label="Home">
          <Image src="/logo.svg" alt="Logo" width={136} height={16} priority />
        </Link>
        <nav className={css.navigation} aria-label="Main Navigation">
          <ul className={css.list}>
            <li className={css.item}>
              <Link href={"/"}>Home</Link>
            </li>
            <li className={css.item}>
              <Link href={"/catalog"}>Catalog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
