import { Link as RouterLink } from "react-router-dom";
import { Box, useMediaQuery, Button, Typography } from "@mui/material";
import { Logo } from "components/Logo/Logo";
import { FlexBetween } from "components/FlexBetween/FlexBetween.styled";
import backgroundImage from "assets/homepage_image.png";

export default function HomePage() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)",
      }}
    >
      <FlexBetween
        component="header"
        sx={{
          padding: "0.5rem 6% 0.5rem",
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
          alignItems: `${isNonMobileScreens ? "center" : "none"}`,
          width: "100%",
          gap: `${isNonMobileScreens ? "0" : "1.5rem"}`,
          px: `${isNonMobileScreens ? "12%" : "6%"}`,
          pt: `${isNonMobileScreens ? "12rem" : "5rem"}`,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            mb: `${isNonMobileScreens ? "0" : "7rem"}`,
            px: "1rem",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              background:
                "linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%)",
              backgroundClip: "text",
              textFillColor: "transparent",
            }}
          >
            Quickly find some friends!
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/register"
            sx={{ backgroundColor: "#FF4820", color: "#FFFFFF" }}
          >
            Join now
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexBasis: "50%",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={backgroundImage}
            alt="people communicate"
            style={{
              width: "70%",
              height: "70%",
              objectFit: "contain",
              overflow: "hidden",
            }}
          />
        </Box>
      </FlexBetween>
    </Box>
  );
}
