"use client";

import { FaStar } from "react-icons/fa";
import css from "./ReviewsCard.module.css";

type ReviewsCardProps = {
  rating?: number;
  userName?: string;
};

export default function ReviewsCard({ rating = 3, userName = "Alice", }: ReviewsCardProps) {
  const initial = userName.trim().charAt(0).toUpperCase();

    return (
    <div className={css.containerReviews}>
      <div className={css.wrapperReviews}>
        <div className={css.authorImage} aria-label={userName}>{initial}</div>

        <div className={css.wrapperUser} >
          <p className={css.userName}>Alice</p>
          <div className={css.rating} aria-label={`Rating: ${rating} out of 5`}>
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={index < rating ? css.starFilled : css.starEmpty}
                aria-hidden="true"
              />
            ))}
          </div>
      </div>
        </div>

    <div className={css.wrapperDescription}>
            <p className={css.description}>
              The Mavericks panel truck was a perfect choice for my solo road trip.
              Compact, easy to drive, and had all the essentials. The kitchen
              facilities were sufficient, and the overall experience was fantastic.
            </p>
    </div>


    </div>
  );
}
