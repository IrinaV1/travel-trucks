import * as Yup from "yup";

export type BookFormValues = {
  name: string;
  email: string;
};
export const bookFormSchema: Yup.ObjectSchema<BookFormValues> = Yup.object({
  name: Yup.string()
    .trim()
    .required("Please enter your name.")
    .min(4, "Please enter your name.")
    .matches(/^[\p{L}]+(?:[ '-][\p{L}]+)*$/u, "Please enter your name.")
    .test("full-name", "Please enter your full name.", (value) => {
      if (!value) return true;
      const nameParts = value.trim().split(/\s+/);
      return (
        nameParts.length >= 2 && nameParts.every((part) => part.length >= 2)
      );
    }),
  email: Yup.string()
    .trim()
    .email("Please enter your email.")
    .max(30, "Email is too long")
    .required("Please enter your email."),
});
