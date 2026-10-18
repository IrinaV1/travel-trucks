"use client";

import { useEffect } from "react";
import css from "./LoadingModal.module.css";
import { Oval } from "react-loader-spinner";

export default function LoadingModal() {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);
  return (
    <div className={css.backdrop}>
      <div
        className={css.modal}
        role="status"
        aria-live="polite"
        aria-label="Loading tracks"
      >
        <Oval
          visible
          height={72}
          width={72}
          color="#6D7B75"
          secondaryColor="#F7F7F7"
          strokeWidth={4}
          ariaLabel="Loading"
        />
        <div className={css.wrapperText}>
          <h2 className={css.title}>Loading tracks...</h2>
          <p className={css.description}>
            Please wait while we fetch the best travel trucks for you.
          </p>
        </div>
      </div>
    </div>
  );
}
