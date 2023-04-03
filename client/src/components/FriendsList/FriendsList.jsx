import { useEffect, useState } from "react";
import { Button, List, ListItem, Typography, useTheme } from "@mui/material";
import PostTitle from "components/PostTitle/PostTitle";
import WidgetWrapper from "components/WidgetWrapper/WidgetWrapper";
import { FlexBetween } from "components/FlexBetween/FlexBetween.styled";

const FriendsList = ({ user }) => {
  const [displayedFriends, setDisplayedFriends] = useState(
    user?.friends?.slice(0, 5)
  );
  const { palette } = useTheme();

  useEffect(() => {
    setDisplayedFriends(user?.friends?.slice(0, 5));
  }, [user]);

  const handleSeeAllClick = () => {
    setDisplayedFriends(user.friends);
  };

  return (
    <WidgetWrapper sx={{ mt: "2rem", overflow: "hidden", overflowY: "scroll" }}>
      <FlexBetween
        sx={{
          pb: "0.5rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <Typography color={palette.neutral.dark} variant="h5" fontWeight="500">
          Friend List
        </Typography>
        {displayedFriends.length < user.friends.length && (
          <Button
            variant="text"
            size="small"
            color="inherit"
            onClick={handleSeeAllClick}
            sx={{
              fontWeight: 400,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            See All
          </Button>
        )}
      </FlexBetween>

      <List gap="1.5rem">
        {displayedFriends.map((friend) => (
          <ListItem key={friend._id} sx={{ display: "block", px: "0.5rem" }}>
            <PostTitle owner={friend} />
          </ListItem>
        ))}
      </List>
    </WidgetWrapper>
  );
};

export default FriendsList;
