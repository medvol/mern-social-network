import * as yup from "yup";
import { emailRegexp } from "./emailRegexp";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .pattern(emailRegexp)
    .email("invalid email")
    .required("required"),
  password: yup.string().required("required"),
});
