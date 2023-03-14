import { Box, useMediaQuery } from "@mui/material";
import { Navbar } from "components/Navbar/Navbar";
import UserWidget from "components/UserWidget/UserWidget";
import MyPostWidget from "components/MyPostWidget/MyPostWidget";
import { useAuth } from "hooks/useAuth";

export default function HomePage() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { user } = useAuth();
  const {picturePath}= user

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
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
        </Box>
        {isNonMobileScreens && <Box flexBasis="26%"></Box>}
      </Box>
    </>
  );
}
