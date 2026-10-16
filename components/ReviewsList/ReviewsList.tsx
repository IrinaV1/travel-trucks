'use client'

import { useQuery } from "@tanstack/react-query";
import css from './ReviewsList.module.css';
import ReviewsCard from "../ReviewsCard/ReviewsCard";
import { getCamperReviews } from "@/lib/api/clientApi";

type Props = {
   camperId: string;
};
export default function ReviewsList({ camperId }: Props) {
      const { data, isLoading, isError } = useQuery({
    queryKey: ["camperReviews", camperId],
    queryFn: () => getCamperReviews(camperId),
      });
     if (isLoading) {
  return (
    <div className={css.reviewsList}>
      <p>Loading reviews...</p>
    </div>
  );
}

  if (isError) {
    return <p>Failed to load reviews.</p>;
  }

  if (!data || data.length === 0) {
    return <p>No reviews yet.</p>;
  }
    return (
        <ul className={css.reviewsList}>
     {data.map((review) => (
        <li key={review.id}>
          <ReviewsCard review={review} />
        </li>
      ))}
        </ul>
    )
}