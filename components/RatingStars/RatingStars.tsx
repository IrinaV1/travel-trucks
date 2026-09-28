"use client";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";
import css from './RatingStars.module.css'


type RatingStarsProps = {
  rating: number;
};

export default function RatingStars({ rating }: RatingStarsProps) {
  return (
    <div className={css.rating}>
      <div className={css.stars}>
        {[1, 2, 3, 4, 5].map((star) => {
          if (rating >= star) {
            return <MdStar key={star} />;
          }

          if (rating >= star - 0.5) {
            return <MdStarHalf key={star} />;
          }

          return <MdStarBorder key={star} />;
        })}
      </div>

      <span className={css.dot}>•</span>

      <span className={css.value}>{rating}</span>
    </div>

  );
}