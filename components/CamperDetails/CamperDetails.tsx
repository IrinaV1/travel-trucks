"use client";
import { FaStar } from "react-icons/fa";
import css from "./CamperDetails.module.css";
import { CiMap } from "react-icons/ci";
export default function CamperDetails() {
  return (
    <div className={css.containerCamperDetails}>
      <div className={css.infoCamper}>
        <h1 className={css.title}>Mavericks</h1>
        <div className={css.info}>
          <div className={css.rating}>
            <FaStar className={css.starIcon} />
            <span className={css.infoText}>4.4</span>
            <span className={css.infoText}>(2 Reviews)</span>
          </div>
          <div className={css.location}>
            <CiMap className={css.icon} size={24} />
            <span className={css.infoText}>Kyiv, Ukraine</span>
          </div>
        </div>
        <p className={css.description}>
          Embrace simplicity and freedom with the Mavericks panel truck, an
          ideal choice for solo travelers or couples seeking a compact and
          efficient way to explore the open roads. This no-frills yet reliable
          panel truck offers the essentials for a comfortable journey, making it
          the perfect companion for those who value simplicity and
          functionality.
        </p>
      </div>
    </div>
  );
}
