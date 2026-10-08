
import css from "./page.module.css";
import Link from "next/link";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
      <main className={css.main}>
<Hero/>
      </main>
  
  );
}
