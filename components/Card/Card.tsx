import Image from 'next/image';
import css from './Card.module.css'
import Link from 'next/link';

type CardProps = {
  camperId: string;
};
export default function Card({ camperId }: CardProps){
    return(
        <div className={css.containerCard}>
<div className={css.wrapperImage}>
    <Image
    className={css.image}
            src="/truck.jpg"
            alt="travel truck"
            aria-hidden="true"
            width={219}
            height={240}/>
    </div>
<div className={css.wrapperCard}>
  <div className={css.titlePrice}>
        <h2 className={css.title}>  Mavericks</h2>
    <p className={css.price}>€8000</p>
</div>

    <p className={css.rating}>⭐4.4(2 Reviews)</p>
     <p className={css.location}>Kyiv, Ukraine</p>

        <p className={css.description}>Embrace simplicity and freedom with the Mavericks panel truck...</p>

<ul className={css.list}>
<li className={css.item}>Petrol</li>
<li className={css.item}>Automatic</li>
<li className={css.item}>Alcove</li>
</ul>
<Link
 className={css.link}
         href={`/catalog/${camperId}`}
        target="_blank"
        rel="noopener noreferrer">Show more</Link>
</div>
        </div>
    );
}