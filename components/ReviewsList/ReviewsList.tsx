"use client";

import { useQuery } from "@tanstack/react-query";
import css from "./ReviewsList.module.css";
import ReviewsCard from "../ReviewsCard/ReviewsCard";
import { getCamperReviews } from "@/lib/api/clientApi";
import Loader from "../Loader/Loader";
import { CamperReview } from "@/types/review";

type Props = {
  camperId: string;
  initialReviews: CamperReview[];
};
export default function ReviewsList({ camperId, initialReviews }: Props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["camperReviews", camperId],
    queryFn: () => getCamperReviews(camperId),
    initialData: initialReviews,
  });
  if (isLoading) {
    return (
      <div className={css.reviewsList}>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <div className={css.reviewsList}> <p>Failed to load reviews.</p></div>;
  }

  if (!data || data.length === 0) {
    return <div className={css.reviewsList}><p>No reviews yet.</p></div>;
  }
  return (
    <ul className={css.reviewsList}>
      {data.map((review) => (
        <li key={review.id}>
          <ReviewsCard review={review} />
        </li>
      ))}
    </ul>
  );
}
