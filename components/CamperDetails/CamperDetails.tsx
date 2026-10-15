"use client";
import { FaStar } from "react-icons/fa";
import css from "./CamperDetails.module.css";
import { CiMap } from "react-icons/ci";
import { Camper } from "@/types/camper";

  type CamperDetailsProps = {
  camper: Camper;
};

export default function CamperDetails({camper}: CamperDetailsProps) {


  return (
    <div className={css.containerCamperDetails}>
      <div className={css.infoCamper}>
        <h1 className={css.title}>{camper.name }</h1>
        <div className={css.info}>
          <div className={css.rating}>
            <FaStar className={css.starIcon} />
            <span className={css.infoText}>{camper.rating }</span>
            <span className={css.infoText}>({camper.totalReviews} Reviews)</span>
          </div>
          <div className={css.location}>
            <CiMap className={css.icon} />
            <span className={css.infoText}>{ camper.location}</span>
          </div>
        </div>
        <p className={css.price}>€{camper.price }</p>
      </div>
        <p className={css.description}>{camper.description}
        </p>
    </div>
  );
}
