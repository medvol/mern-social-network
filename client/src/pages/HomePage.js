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
        <FlexBetween gap="2rem">
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
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            pt: `${isNonMobileScreens ? "12rem" : "1rem"}`,
            px: "1rem",
          }}
        >
          <Typography variant="h1">Quickly find some friends!</Typography>
          <Button variant="contained" component={RouterLink} to="/register">
            Join now
          </Button>
        </Box>
        <Box sx={{ flexBasis: "60%", overflow: "hidden" }}>
          <img src={backgroundImage} alt="people communicate" />
        </Box>
      </FlexBetween>
    </Box>
  );
}
