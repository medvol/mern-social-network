import { Box } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Box
      sx={{
        minWidth: "200px",
        width: "33.33%",
        height: "360px",
        padding: "10px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ccc",
        cursor: "pointer",
              transition: ".2s linear",
        mx:"auto"
      }}
    >
      <Box
        component="span"
        sx={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          position: "relative",
          animation: "rotate 1s linear infinite",
          "&::before, &::after": {
            content: '""',
            boxSizing: "border-box",
            position: "absolute",
            inset: "0px",
            borderRadius: "50%",
            border: "5px solid #263238",
            animation: "prixClipFix 2s linear infinite",
          },
          "&::after": {
            borderColor: "#FF3D00",
            animation:
              "prixClipFix 2s linear infinite , rotate 0.5s linear infinite reverse",
            inset: "6px",
          },
          "@keyframes rotate": {
            "0%": {
              transform: "rotate(0deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },
          "@keyframes prixClipFix": {
            "0%": { clipPath: "polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)" },
            "25%": {
              clipPath: "polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)",
            },
            "50%": {
              clipPath:
                "polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)",
            },
            "75%": {
              clipPathh: "polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)",
            },
            "100%": {
              clipPath: "polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)",
            },
          },
        }}
      />
    </Box>
  );
};

export default Loader;
