import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "components/Navbar/Navbar";
import FriendsList from "components/FriendsList/FriendsList";
import AddPostWidget from "components/AddPostWidget/AddPostWidget";
import PostList from "components/PostList/PostList";
import UserWidget from "components/UserWidget/UserWidget";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  useEffect(() => {
    const getUser = async () => {
      const {data} = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/${userId}`
      );
      setUser(data);
    };
    getUser();
  }, [userId]);

  if (!user) return null;

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
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
          <PostList user={user} isProfilePage />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
