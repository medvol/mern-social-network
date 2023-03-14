import { Box, useMediaQuery } from "@mui/material";
import { Navbar } from "components/Navbar/Navbar";
import UserWidget from "components/UserWidget/UserWidget";
import { useAuth } from "hooks/useAuth";

export default function HomePage() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const {
    user
  } = useAuth();

  return (
    <>
      <Box as="header">
        <Navbar />
      </Box>
     <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget user={user} />
        </Box>
        </Box>
    </>
  );
}
