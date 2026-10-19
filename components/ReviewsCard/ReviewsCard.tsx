"use client";

import { FaStar } from "react-icons/fa";
import css from "./ReviewsCard.module.css";
import { CamperReview } from "@/types/review";

type ReviewsCardProps = {
  review: CamperReview;
};

export default function ReviewsCard({ review }: ReviewsCardProps) {
  const initial = review.reviewer_name.trim().charAt(0).toUpperCase();

  return (
    <div className={css.containerReviews}>
      <div className={css.wrapperReviews}>
        <div className={css.authorImage} aria-label={review.reviewer_name}>
          {initial}
        </div>

        <div className={css.wrapperUser}>
          <p className={css.userName}>{review.reviewer_name}</p>
          <div
            className={css.rating}
            aria-label={`Rating: ${review.reviewer_rating} out of 5`}
          >
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={
                  index < review.reviewer_rating
                    ? css.starFilled
                    : css.starEmpty
                }
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>

      <div className={css.wrapperDescription}>
        <p className={css.description}>{review.comment}</p>
      </div>
    </div>
  );
}
