"use client"
import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className={css.header}>
      <div className={`${css.headerContainer} container`}>
        <Link className={css.logo} href="/" aria-label="Home">
          <Image
            src="/icons/logo.svg"
            alt="TravelTrucks"
            width={136}
            height={16}
            priority
          />
        </Link>
        <nav className={css.navigation} aria-label="Main Navigation">
          <ul className={css.list}>
            <li className={css.item}>
              <Link
                href={"/"}
                className={pathname === "/" ? css.active : ""}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li className={css.item}>
              <Link
                href={"/catalog"}
                className={pathname.startsWith("/catalog") ? css.active : ""}
                aria-current={
                  pathname.startsWith("/catalog") ? "page" : undefined
                }
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
