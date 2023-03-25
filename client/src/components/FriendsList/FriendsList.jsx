import { Box, Typography, useTheme } from "@mui/material";
import PostTitle from "components/PostTitle/PostTitle";
import WidgetWrapper from "components/WidgetWrapper/WidgetWrapper";

const FriendsList = ({ user }) => {
  const { palette } = useTheme();

  return (
    <WidgetWrapper sx={{mt:"2rem"}}>
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
