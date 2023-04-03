import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, InputBase, useTheme, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { FlexBetween } from "components/FlexBetween/FlexBetween.styled";
import UserImage from "components/UserImage/UserImage";
import { addCommentPost } from "state/posts/operations";
import { useAuth } from "hooks/useAuth";

const AddComment = ({ postId }) => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const { palette } = useTheme();
    const { user } = useAuth();
    
    console.log(postId)

  const handleComment = () => {
    if (!content) return;
    const comment = {
      author: user?._id,
      content: content,
      created_at: Date.now(),
    };
    dispatch(addCommentPost({comment, postId}));
    setContent("");
  };

  return (
    <Box sx={{ pb: "0.5rem" }}>
      <FlexBetween gap="0.5rem" sx={{ position: "relative" }}>
        <UserImage picturePath={user.picturePath} size="35px" />
        <InputBase
          placeholder="Add a comment..."
          onChange={(e) => setContent(e.target.value)}
          value={content}
          sx={{
            width: "100%",
            height: "auto",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "0.25rem 2.5rem 0.25rem 1rem",
          }}
        />
        <IconButton
          onClick={handleComment}
          sx={{ position: "absolute", right: 0, bottom: 0 }}
        >
          <SendIcon />
        </IconButton>
      </FlexBetween>
    </Box>
  );
};

export default AddComment;
