import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FlexBetween } from "components/FlexBetween/FlexBetween.styled";
import UserImage from "components/UserImage/UserImage";
import { useAuth } from "hooks/useAuth";
import { addFriend, deleteFriend } from "state/auth/operations";

const PostTitle = ({ owner }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { _id, firstName, lastName, picturePath, location } = owner;

  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  const isFriend = user.friends.find((friend) => friend._id === _id);

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={picturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${_id}`);
            // navigate(0);
          }}
        >
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {`${firstName} ${lastName}`}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {location}
          </Typography>
        </Box>
      </FlexBetween>

      {isFriend ? (
        <IconButton
          onClick={() =>
            dispatch(deleteFriend({ userId: user.id, friendId: _id }))
          }
          sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
        >
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        </IconButton>
      ) : (
        <IconButton
          onClick={() =>
            dispatch(addFriend({ userId: user.id, friendId: _id }))
          }
          sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
        >
          <PersonAddOutlined sx={{ color: primaryDark }} />
        </IconButton>
      )}
    </FlexBetween>
  );
};

export default PostTitle;
