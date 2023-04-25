import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { loginSchema } from "services";
import { logIn } from "state/auth/operations";
import CustomizedSnackbars from "components/CustomizedSnackbars/CustomizedSnackbars";

const initialValuesLogin = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [errorNotification, setErrorNotification] = useState(false);
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values, onSubmitProps) => {
    setErrorNotification(false);
    const response = await dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );

    if (response.error) {
      setErrorNotification(true);
    }

    onSubmitProps.resetForm();
  };

  return (
    <>
      {errorNotification && (
        <CustomizedSnackbars
          message={"Email or password is wrong"}
          severity={"error"}
        />
      )}
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValuesLogin}
        validationSchema={loginSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          resetForm,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={Boolean(touched.email) && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />

              <TextField
                label="Password"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={Boolean(touched.password) && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>

            <Box>
              <Button
                fullWidth
                type="submit"
                disabled={isSubmitting || Object.keys(errors).length > 0}
                sx={{
                  m: "2rem 0",
                  p: "1rem",
                  backgroundColor: palette.primary.main,
                  color: palette.background.alt,
                  "&:hover": { color: palette.primary.main },
                }}
              >
                {isSubmitting ? "Submitting..." : "Login"}
              </Button>
              <Typography
                onClick={() => {
                  navigate("/register");
                  resetForm();
                }}
                sx={{
                  textDecoration: "underline",
                  color: palette.primary.main,
                  "&:hover": {
                    cursor: "pointer",
                    color: palette.primary.light,
                  },
                }}
              >
                "Don't have an account? Sign Up here."
              </Typography>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};
