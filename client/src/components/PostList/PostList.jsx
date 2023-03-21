import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, getUserPosts } from "state/posts/operations";
import { Box } from "@mui/material";
import Post from "components/Post/Post";
import { useAuth } from "hooks/useAuth";
import { selectPosts } from "state/posts/selectors";

const PostList = ({ isProfilePage = false }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const posts = useSelector(selectPosts);

  useEffect(() => {
    if (isProfilePage) {
      dispatch(getUserPosts(user._id));
    } else {
      dispatch(getAllPosts());
    }
  }, [dispatch, user._id, isProfilePage]);

  return (
    <Box component="ul">
      {posts.map((post) => (
        <Post key={post._id} item={post} />
      ))}
    </Box>
  );
};

export default PostList;
