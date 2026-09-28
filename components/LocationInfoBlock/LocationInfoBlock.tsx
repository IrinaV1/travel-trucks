import Link from "next/link";
import css from "./LocationInfoBlock.module.css";
import RatingStars from "../RatingStars/RatingStars";


export type User = {
  _id: string;
  name: string;
};
// type LocationInfoBlockProps = {
//   location: Location;
// };

export default function LocationInfoBlock(){
    return (

        <div className={css.container}>
            <div className={css.rate}>RATE</div>
            <RatingStars rating={4.5} />
            <h2 className={css.title}>Бакотська затока</h2>
            <ul className={css.list}>
  <li className={css.item}>
    <p className={css.text}>Регіон:
      <span className={css.label}> Хмельниччина</span>
    </p>
  </li>

  <li className={css.item}>
    <p className={css.text}>Тип локації:
      <span className={css.label}> Пляж</span>
    </p>
  </li>
      {/* `/profile/${userId}` */}
  <li className={css.item}>
    
    <p className={css.text}>
      Автор статті: <Link href="/" className={css.link}>Анастасія Олійник</Link>
    </p>
  </li>
</ul>
        </div>
    )
}