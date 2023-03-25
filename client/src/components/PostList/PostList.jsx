import { Box } from "@mui/material";
import Post from "components/Post/Post";
import Loader from "components/Loader/Loader";
import { useAuth } from "hooks/useAuth";
import { usePosts } from "hooks/usePosts";

const PostList = () => {
  const { posts, isLoading, error } = usePosts();
  const { user } = useAuth();

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <Box sx={{ textAlign: "center" }}>
          Something went wrong... Please, try later.
        </Box>
      )}
      {!posts.length && !isLoading && (
        <Box sx={{ textAlign: "center", mt:"2rem" }}>
          Ooops... {user.firstName} {user.lastName} did not post anything
        </Box>
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
