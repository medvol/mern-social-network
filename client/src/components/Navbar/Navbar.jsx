import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import FlexBetween from "components/FlexBetween/FlexBetween.styled";
import { Logo } from "components/Logo/Logo";
import { SearchNav } from "components/SearchNav/SearchNav";
import { DesktopNav } from "components/DesktopNav/DesktopNav";
import { MobileMenuButton } from "components/MobileMenuButton/MobileMenuButton";
import { MobileNav } from "components/MobileNav/MobileNav";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);

  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const alt = theme.palette.background.alt;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
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
