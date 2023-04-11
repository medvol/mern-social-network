import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { FlexBetween } from "components/FlexBetween/FlexBetween.styled";
import { Logo } from "components/Logo/Logo";
import { SearchNav } from "components/SearchNav/SearchNav";
import { DesktopNav } from "components/DesktopNav/DesktopNav";
import { MobileMenuButton } from "components/MobileMenuButton/MobileMenuButton";
import { MobileNav } from "components/MobileNav/MobileNav";

export const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const alt = theme.palette.background.alt;
  const border = theme.palette.divider;

  return (
    <FlexBetween
      component="header"
      padding="0.5rem 6%"
      backgroundColor={alt}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: "100",
        borderBottom: `1px solid ${border}`,
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }}
    >
      <FlexBetween gap="1.75rem">
        <Logo />
        {isNonMobileScreens && <SearchNav />}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <DesktopNav />
      ) : (
        <MobileMenuButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        />
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <MobileNav
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        />
      )}
    </FlexBetween>
  );
};

export default Navbar;
