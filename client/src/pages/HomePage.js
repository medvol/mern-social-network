import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  useMediaQuery,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import { Logo } from "components/Logo/Logo";
import { FlexBetween } from "components/FlexBetween/FlexBetween.styled";
import backgroundImage from "assets/homepage_image.jpg";

export default function HomePage() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const theme = useTheme();
  const border = theme.palette.divider;

  return (
    <Box>
      <FlexBetween
        component="header"
        sx={{
          padding: "0.5rem 6% 0.5rem",
          borderBottom: `1px solid ${border}`,
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <Logo />
        <FlexBetween
          sx={{
            gap: `${isNonMobileScreens ? "2rem" : "0.5rem"}`,
          }}
        >
          <Button
            component={RouterLink}
            to="/register"
            sx={{ textTransform: "none" }}
          >
            Join now
          </Button>
          <Button
            variant="outlined"
            component={RouterLink}
            to="/login"
            sx={{ textTransform: "none" }}
          >
            Sign in
          </Button>
        </FlexBetween>
      </FlexBetween>
      <FlexBetween
        component="main"
        sx={{
          display: `${isNonMobileScreens ? "flex" : "block"}`,
          gap: "0.5rem",
          alignItems: `${isNonMobileScreens ? "start" : "none"}`,
          width: "100%",
          px: "6%",
          pb: `${isNonMobileScreens ? "0" : "10rem"}`,
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            py: `${isNonMobileScreens ? "12rem" : "5rem"}`,
            px: "1rem",
          }}
        >
          <Typography variant="h1">Quickly find some friends!</Typography>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/register"
          >
            Join now
          </Button>
        </Box>
        <Box sx={{ maxHeight: "50%", flexBasis: "60%", overflow: "hidden" }}>
          <img
            src={backgroundImage}
            alt="people communicate"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              overflow: "hidden",
            }}
          />
        </Box>
      </FlexBetween>
    </Box>
  );
}
