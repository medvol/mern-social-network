import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box, AppBar, useMediaQuery, Toolbar } from "@mui/material";
import Navbar from "components/Navbar/Navbar";
import UserWidget from "components/UserWidget/UserWidget";
import AddPostWidget from "components/AddPostWidget/AddPostWidget";
import PostList from "components/PostList/PostList";
import Advertisement from "components/Advertisement/Advertisement";
import FriendsList from "components/FriendsList/FriendsList";
import BackToTop from "components/BackToTop/BackToTop";
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
      <Box>
        <Navbar />
      </Box>
      <Toolbar id="back-to-top-anchor" />
      <Box
        component="main"
        width="100%"
        padding="6rem 6% 2rem"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <AppBar
          position="='sticky"
          sx={{
            flexBasis: `${isNonMobileScreens ? "26%" : undefined}`,
            top: "8rem",
          }}
        >
          <UserWidget user={user} />
        </AppBar>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <AddPostWidget />
          <PostList />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <Advertisement />
            <Box m="2rem 0" />
            <FriendsList user={user} />
          </Box>
        )}
        <BackToTop/>
      </Box>
    </>
  );
}
