import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";
import { Navbar } from "components/Navbar/Navbar";
import UserWidget from "components/UserWidget/UserWidget";
import AddPostWidget from "components/AddPostWidget/AddPostWidget";
import { useAuth } from "hooks/useAuth";
import { getAllPosts } from "state/posts/operations";

export default function HomePage() {
  const dispatch = useDispatch();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { user } = useAuth();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

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
          <AddPostWidget />
        </Box>
        {isNonMobileScreens && <Box flexBasis="26%"></Box>}
      </Box>
    </>
  );
}
