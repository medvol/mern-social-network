import { Box, Typography, useTheme } from "@mui/material";
import PostTitle from "components/PostTitle/PostTitle";
import WidgetWrapper from "components/WidgetWrapper/WidgetWrapper";
import { useAuth } from "hooks/useAuth";

const FriendsList = () => {
  const { palette } = useTheme();
  const { user } = useAuth();

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>

      <Box display="flex" flexDirection="column" gap="1.5rem" component="ul">
        {user.friends.map((friend) => (
          <li key={friend._id}>
            <PostTitle owner={friend} />
          </li>
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendsList;
