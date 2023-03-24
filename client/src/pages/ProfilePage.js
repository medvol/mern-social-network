import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "components/Navbar/Navbar";
import FriendsList from "components/FriendsList/FriendsList";
import AddPostWidget from "components/AddPostWidget/AddPostWidget";
import PostList from "components/PostList/PostList";
import UserWidget from "components/UserWidget/UserWidget";
import { useDispatch } from "react-redux";
import { getUserPosts } from "state/posts/operations";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const dispatch = useDispatch();
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
      <Box
        component="main"
        width="100%"
        padding="6rem 6% 2rem"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget user={user} />
          <Box m="2rem 0" />
          <FriendsList user={user} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <AddPostWidget />
          <Box m="2rem 0" />
          <PostList />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
