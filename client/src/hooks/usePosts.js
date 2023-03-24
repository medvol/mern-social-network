import { useSelector } from "react-redux";
import {
  selectPosts,
  selectIsLoading,
  selectError,
} from "state/posts/selectors";

export const usePosts = () => {
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return {
    posts,
    isLoading,
    error,
  };
};
