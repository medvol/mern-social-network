import { useSelector } from "react-redux";
import {
  selectMode,
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
} from "state/auth/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const mode = useSelector(selectMode);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    mode,
  };
};
