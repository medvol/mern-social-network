import * as yup from "yup";
import { emailRegexp } from "./emailRegexp";

export const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup
    .string()
    .matches(
      emailRegexp,
      "Email must use only letters, numbers, dots, underscores or hyphens and contain @ and com"
    )
    .email("invalid email")
    .required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});
