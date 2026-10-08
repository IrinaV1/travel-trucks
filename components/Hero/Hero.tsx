import Link from 'next/link'
import css from './Hero.module.css'

export default function Hero (){
  return(
           <section className={`${css.hero} container`}>

        <div className={css.containerTitle}>
          <h1 className={css.title}>
            Campers of your dreams
          </h1>
          <p className={css.subtitle}>
          You can find everything you want in our catalog
          </p>
        </div>
          <Link
            className={`${css.link} a`}
            href="/"
          >
           View Now
          </Link>
        
        </section>)
}