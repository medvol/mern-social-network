import { Box, useMediaQuery } from "@mui/material";
import { Navbar } from "components/Navbar/Navbar";
import UserWidget from "components/UserWidget/UserWidget";
import AddPostWidget from "components/AddPostWidget/AddPostWidget";
import PostList from "components/PostList/PostList";
import Advertisement from "components/Advertisement/Advertisement";
import FriendsList from "components/FriendsList/FriendsList";

export default function HomePage() {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

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
          <UserWidget />
        </Box>
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
            <FriendsList/>
          </Box>
        )}
      </Box>
    </>
  );
}
