"use client";

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import css from "./BookForm.module.css";
import { useId } from "react";
import { bookFormSchema, BookFormValues } from "./bookFormSchema";
import { MdErrorOutline } from "react-icons/md";
import { createBookingRequest } from "@/lib/api/clientApi";
import toast from "react-hot-toast";

const initialValues: BookFormValues = {
  name: "",
  email: "",
};
type BookFormProps = {
  camperId: string;
};
export default function BookForm({ camperId }: BookFormProps) {
  const fieldId = useId();
  const handleSubmit = async (
    values: BookFormValues,
    actions: FormikHelpers<BookFormValues>,
  ) => {
    actions.setStatus(undefined);
    try {
      await createBookingRequest(camperId, values);

      actions.resetForm();
      toast.success("Your booking request has been sent successfully!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };
  return (
    <div className={css.containerBookForm}>
      <div className={css.containerTitle}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={bookFormSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, submitCount, touched, isSubmitting }) => (
          <Form className={css.form}>
            <fieldset className={css.fieldset}>
              <div className={css.inputWrapper}>
                <Field
                  type="text"
                  name="name"
                  id={`${fieldId}-name`}
                  placeholder="Name*"
                  autoComplete="name"
                  className={`${css.input} ${
                    (submitCount > 0 || touched.name) && errors.name
                      ? css.inputError
                      : ""
                  }`}
                  aria-invalid={Boolean(
                    (submitCount > 0 || touched.name) && errors.name,
                  )}
                />
                {(submitCount > 0 || touched.name) && errors.name && (
                  <>
                    <label
                      className={css.floatingLabelError}
                      htmlFor={`${fieldId}-name`}
                    >
                      Name*
                    </label>
                    <MdErrorOutline
                      className={css.errorIcon}
                      aria-hidden="true"
                    />
                  </>
                )}
                <ErrorMessage
                  name="name"
                  component="span"
                  className={css.error}
                />
              </div>

              <div className={css.inputWrapper}>
                <Field
                  type="email"
                  name="email"
                  id={`${fieldId}-email`}
                  placeholder="Email*"
                  autoComplete="email"
                  className={`${css.input} ${
                    (submitCount > 0 || touched.email) && errors.email
                      ? css.inputError
                      : ""
                  }`}
                  aria-invalid={Boolean(
                    (submitCount > 0 || touched.email) && errors.email,
                  )}
                />
                {(submitCount > 0 || touched.email) && errors.email && (
                  <>
                    <label
                      className={css.floatingLabelError}
                      htmlFor={`${fieldId}-email`}
                    >
                      Email*
                    </label>
                    <MdErrorOutline
                      className={css.errorIcon}
                      aria-hidden="true"
                    />
                  </>
                )}
                <ErrorMessage
                  name="email"
                  component="span"
                  className={css.error}
                />
              </div>
            </fieldset>
            <button type="submit" className={css.btn} disabled={isSubmitting}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
