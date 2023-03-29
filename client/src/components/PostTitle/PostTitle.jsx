import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { IconButton, Typography, useTheme, Tooltip } from "@mui/material";
import { FlexBetween } from "components/FlexBetween/FlexBetween.styled";
import UserImage from "components/UserImage/UserImage";
import { useAuth } from "hooks/useAuth";
import { addFriend, deleteFriend } from "state/auth/operations";

const PostTitle = ({ owner }) => {
  const dispatch = useDispatch();
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
        <UserImage image={picturePath} size="50px" />
        <Link to={`/profile/${_id}`}>
          <Typography
            color={main}
            variant="h6"
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
        </Link>
      </FlexBetween>
      {isFriend && user._id !== owner._id && (
        <Tooltip title="Remove Friend" placement="top-end">
          <IconButton
            onClick={() =>
              dispatch(deleteFriend({ userId: user._id, friendId: _id }))
            }
            sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
          >
            <PersonRemoveOutlined sx={{ color: primaryDark }} />
          </IconButton>
        </Tooltip>
      )}
      {!isFriend && user._id !== owner._id && (
        <Tooltip title="Add Friend" placement="top-end">
          <IconButton
            onClick={() =>
              dispatch(addFriend({ userId: user._id, friendId: _id }))
            }
            sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
          >
            <PersonAddOutlined sx={{ color: primaryDark }} />
          </IconButton>
        </Tooltip>
      )}{" "}
    </FlexBetween>
  );
};

export default PostTitle;
