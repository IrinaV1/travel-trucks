'use client';

import Image from "next/image";
import css from "./Card.module.css";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { MdDirectionsCar } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { CatalogCamper } from "@/types/camper";
import { getCamperById } from "@/lib/api/clientApi";
import { useQuery } from "@tanstack/react-query";

type CardProps = {
  camper: CatalogCamper;
};
export default function Card({ camper }: CardProps) {
  const { data: camperDetails } = useQuery({
    queryKey: ["camper", camper.id],
    queryFn: () => getCamperById(camper.id),
  });

  const description = camperDetails?.description ?? "";
  return (
    <div className={css.containerCard}>
      <div className={css.wrapperImage}>
        <Image
          className={css.image}
          src={camper.coverImage || "/truck.jpg"}
          alt={camper.name}
          aria-hidden="true"
          width={219}
          height={240}
          loading="eager"
        />
      </div>

      <div className={css.wrapperCard}>
        <div className={css.wrapperTitle}>
          <div className={css.titlePrice}>
            <h2 className={css.title}>{camper.name}</h2>
            <p className={css.price}>€{camper.price}</p>
          </div>
          <div className={css.info}>
            <div className={css.rating}>
              <FaStar className={css.starIcon} />
              <span className={css.infoText}>{camper.rating}</span>
              <span className={css.infoText}>({camper.totalReviews} Reviews)</span>
            </div>
            <div className={css.location}>
              <CiMap className={css.icon} size={24}/>
              <span className={css.infoText}>{camper.location}</span>
            </div>
          </div>
        </div>
        <p className={css.description}>
         {description}
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
            <span className={css.itemTitle}>{camper.engine}</span>
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
            <span className={css.itemTitle}>{camper.transmission}</span>
          </li>

          <li className={css.item}>
            <MdDirectionsCar className={css.itemIcon} />
            <span className={css.itemTitle}>{camper.form}</span> 
          </li>
        </ul>
        <Link
          className={`${css.link} a`}
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show more
        </Link>
      </div>
    </div>
  );
}
