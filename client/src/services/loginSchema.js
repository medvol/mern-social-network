import * as yup from "yup";
import { emailRegexp } from "./emailRegexp";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      emailRegexp,
      "Email must use only letters, numbers, dots, underscores or hyphens and contain @ and com"
    )
    .email("invalid email")
    .required("required"),
  password: yup.string().required("required"),
});
