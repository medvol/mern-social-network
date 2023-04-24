import { Box, Typography } from "@mui/material";
import Post from "components/Post/Post";
import SortPosts from "components/SortPosts/SortPosts";
import { usePosts } from "hooks/usePosts";
import { setPosts } from "state/posts/postsSlice";
import { useDispatch } from "react-redux";

const PostList = () => {
  const { posts, error } = usePosts();
  const dispatch = useDispatch();

  const handleSort = (value) => {
    const sortedPosts = [...posts].sort((a, b) => {
      if (value === "Top") {
        return (b.likes?.length ?? 0) - (a.likes?.length ?? 0);
      } else {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });
    dispatch(setPosts(sortedPosts));
  };

  return (
    <>
      {error && (
        <Typography variant="h6" fontWeight="400" sx={{ textAlign: "center" }}>
          Something went wrong... Please, try later.
        </Typography>
      )}
      <SortPosts handleSort={handleSort} />
      <Box component="ul">
        {posts.map((post) => (
          <Post key={post._id} item={post} />
        ))}
      </Box>
    </>
  );
};

export default PostList;
