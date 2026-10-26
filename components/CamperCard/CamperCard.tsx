"use client";

import Image from "next/image";
import css from "./CamperCard.module.css";
import { FaStar } from "react-icons/fa";
import { MdDirectionsCar } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import { CatalogCamper } from "@/types/camper";
import { BsEvStation, BsFuelPump } from "react-icons/bs";
import { TbAutomaticGearbox, TbManualGearbox } from "react-icons/tb";
import { formatValue } from "@/lib/utils/utils";
import ButtonLink from "../ButtonLink/ButtonLink";

type CardProps = {
  camper: CatalogCamper;
};

export default function CamperCard({ camper }: CardProps) {
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
              <span className={css.infoText}>
                ({camper.totalReviews} Reviews)
              </span>
            </div>
            <div className={css.location}>
              <CiMap className={css.icon} size={24} />
              <span className={css.infoText}>{camper.location}</span>
            </div>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>

        <ul className={css.list}>
          <li className={css.item}>
            {camper.engine === "electric" ? (
              <BsEvStation className={css.itemIcon} size={20} />
            ) : (
              <BsFuelPump className={css.itemIcon} size={20} />
            )}
            <span className={css.itemTitle}>{formatValue(camper.engine)}</span>
          </li>
          <li className={css.item}>
            {camper.transmission === "automatic" ? (
              <TbAutomaticGearbox className={css.itemIcon} size={20} />
            ) : (
              <TbManualGearbox className={css.itemIcon} size={20} />
            )}
            <span className={css.itemTitle}>{formatValue(camper.transmission)}</span>
          </li>

          <li className={css.item}>
            <MdDirectionsCar className={css.itemIcon} size={20} />
            <span className={css.itemTitle}>{formatValue(camper.form)}</span>
          </li>
        </ul>
        <ButtonLink
          className={`${css.link} a`}
          href={`/catalog/${camper.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show more
        </ButtonLink>
      </div>
    </div>
  );
}
