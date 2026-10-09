import Image from "next/image";
import css from "./Card.module.css";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { MdDirectionsCar } from "react-icons/md";
import { CiMap } from "react-icons/ci";


type CardProps = {
  camperId: string;
};
export default function Card({ camperId }: CardProps) {
  return (
    <div className={css.containerCard}>
      <div className={css.wrapperImage}>
        <Image
          className={css.image}
          src="/truck.jpg"
          alt="travel truck"
          aria-hidden="true"
          width={219}
          height={240}
        />
      </div>

      <div className={css.wrapperCard}>
        <div className={css.wrapperTitle}>
          <div className={css.titlePrice}>
            <h2 className={css.title}>Mavericks</h2>
            <p className={css.price}>€8000</p>
          </div>
          <div className={css.info}>
            <div className={css.rating}>
              <FaStar className={css.starIcon} />
              <span className={css.infoText}>4.4</span>
              <span className={css.infoText}>(2 Reviews)</span>
            </div>
            <div className={css.location}>
              <CiMap className={css.icon} />
              <span className={css.infoText}>Kyiv, Ukraine</span>
            </div>
          </div>
        </div>
        <p className={css.description}>
          Embrace simplicity and freedom with the Mavericks panel truck...
        </p>

        <ul className={css.list}>
          <li className={css.item}>
            <Image
              src="/icons/petrol.svg"
              alt=""
              aria-hidden="true"
              width={20}
              height={20}
              className={css.itemIcon}
            />
            <span className={css.itemTitle}>Petrol</span>
          </li>
          <li className={css.item}>
            <Image
              src="/icons/automatic.svg"
              alt=""
              aria-hidden="true"
              width={20}
              height={20}
              className={css.itemIcon}
            />
            <span className={css.itemTitle}>Automatic</span>
          </li>

          <li className={css.item}>
            <MdDirectionsCar className={css.itemIcon} />
           <span className={css.itemTitle}>Alcove</span> 
          </li>
        </ul>
        <Link
          className={css.link}
          href={`/catalog/${camperId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show more
        </Link>
      </div>
    </div>
  );
}
