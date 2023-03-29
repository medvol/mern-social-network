import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Toolbar, Typography, useMediaQuery } from "@mui/material";
import Navbar from "components/Navbar/Navbar";
import FriendsList from "components/FriendsList/FriendsList";
import AddPostWidget from "components/AddPostWidget/AddPostWidget";
import PostList from "components/PostList/PostList";
import UserWidget from "components/UserWidget/UserWidget";
import BackToTop from "components/BackToTop/BackToTop";
import { useDispatch } from "react-redux";
import { getUserPosts } from "state/posts/operations";
import { usePosts } from "hooks/usePosts";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { posts, isLoading} = usePosts();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/${userId}`
      );
      setUser(data);
    };
    getUser();
  }, [userId]);

  useEffect(() => {
    dispatch(getUserPosts(userId));
  }, [dispatch, userId]);

  if (!user) return;

  return (
    <Box>
      <Navbar />
      <Toolbar id="back-to-top-anchor" />
      <Box
        component="main"
        width="100%"
        padding="4rem 6% 2rem"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
        alignItems="start"
        position="relative"
        overflow-y="auto"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget user={user} />
          <FriendsList user={user} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <AddPostWidget />
          <PostList />
          {!posts.length && !isLoading && (
            <Typography
              variant="h6"
              fontWeight="400"
              sx={{ textAlign: "center", mt: "2rem" }}
            >
              Ooops... {user.firstName} {user.lastName} did not post anything
            </Typography>
          )}
        </Box>
      </Box>
      <BackToTop />
    </Box>
  );
};

export default ProfilePage;
