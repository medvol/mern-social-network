import { Box, Typography } from "@mui/material";
import Post from "components/Post/Post";
import Loader from "components/Loader/Loader";
import { usePosts } from "hooks/usePosts";

const PostList = () => {
  const { posts, isLoading, error } = usePosts();

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <Typography variant="h6" fontWeight="400" sx={{ textAlign: "center" }}>
          Something went wrong... Please, try later.
        </Typography>
      )}

      {!isLoading && posts && (
        <Box component="ul">
          {posts.map((post) => (
            <Post key={post._id} item={post} />
          ))}
        </Box>
      )}
    </>
  );
};

export default PostList;
