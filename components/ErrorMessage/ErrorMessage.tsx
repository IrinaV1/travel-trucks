"use client";

import css from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  onRetry: () => void;
};

export default function ErrorMessage({
  onRetry,
}: ErrorMessageProps) {
  return (
    <div className={css.container}>
      <div className={css.iconWrapper}>
        <span aria-hidden="true">!</span>
      </div>

      <h2 className={css.title}>
        Oops! Something went wrong
      </h2>

      <p className={css.description}>
        We couldn’t load the campers. Please check your
        internet connection and try again.
      </p>

      <button
        type="button"
        className={css.btn}
        onClick={onRetry}
      >
        Try again
      </button>
    </div>
  );
}