import { Divider, List, ListItem, Typography, useTheme } from "@mui/material";
import PostTitle from "components/PostTitle/PostTitle";
import WidgetWrapper from "components/WidgetWrapper/WidgetWrapper";

const FriendsList = ({ user }) => {
  const { palette } = useTheme();

  return (
    <WidgetWrapper sx={{ mt: "2rem", overflow: "hidden", overflowY: "scroll" }}>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ pb: "0.5rem" }}
      >
        Friend List
      </Typography>
      <Divider sx={{ mb: "0.75rem" }} />

      <List display="flex"  gap="1.5rem">
        {user.friends.map((friend) => (
          <ListItem sx={{px:"0.5rem"}} key={friend._id}>
            <PostTitle owner={friend} />
          </ListItem>
        ))}
      </List>
    </WidgetWrapper>
  );
};

export default FriendsList;
