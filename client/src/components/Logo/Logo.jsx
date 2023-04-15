import { Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const primaryLight = theme.palette.primary.light;

  return (
    <Typography
      fontWeight="bold"
      fontSize="clamp(1rem, 2rem, 2.25rem)"
      color="primary"
      onClick={() => navigate("/main")}
      sx={{
        "&:hover": {
          color: primaryLight,
          cursor: "pointer",
        },
      }}
    >
      SocialNet
    </Typography>
  );
};
