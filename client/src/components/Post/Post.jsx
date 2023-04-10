import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { FlexBetween } from "components/FlexBetween/FlexBetween.styled";
import PostTitle from "components/PostTitle/PostTitle";
import AddComment from "components/AddComment/AddComment";
import Comment from "components/Comment/Comment";
import WidgetWrapper from "components/WidgetWrapper/WidgetWrapper";
import { useAuth } from "hooks/useAuth";
import { likePost } from "state/posts/operations";
import { sortComments } from "helpers/sortComments";

const Post = ({ item }) => {
  const [isComments, setIsComments] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { owner, likes, comments, picturePath, description, _id } = item;
  const isLiked = likes.includes(user._id);
  const likeCount = likes.length;
  const sortedByDateComments = sortComments(comments);
  const truncatedText = description.substring(0, 150);

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const handleShowText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <WidgetWrapper component="li" sx={{ m: "2rem 0", pb: 0, pl: 0, pr: 0 }}>
      <Box pl="1.5rem" pr="1rem">
        <PostTitle owner={owner} />
        {showFullText ? (
          <Typography color={main} sx={{ mt: "1rem" }}>
            {description}
          </Typography>
        ) : (
          <Typography onClick={handleShowText} color={main} sx={{ mt: "1rem" }}>
            {truncatedText}
            {description.length > 150 && (
              <Typography
                component="span"
                color="white"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: "#70b5f9",
                  },
                }}
              >
                {" "}
                ...see more
              </Typography>
            )}
          </Typography>
        )}

        {picturePath && (
          <img
            width="100%"
            height="auto"
            alt="post"
            style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
            src={picturePath}
          />
        )}
        <FlexBetween mt="0.25rem">
          <FlexBetween gap="1rem">
            <FlexBetween gap="0.3rem">
              {isLiked ? (
                <IconButton
                  disabled={user._id === owner._id}
                  onClick={() => dispatch(likePost(_id))}
                >
                  <FavoriteOutlined sx={{ color: primary }} />
                </IconButton>
              ) : (
                <IconButton
                  disabled={user._id === owner._id}
                  onClick={() => dispatch(likePost(_id))}
                >
                  <FavoriteBorderOutlined />
                </IconButton>
              )}

              <Typography component="span">{likeCount}</Typography>
            </FlexBetween>

            <FlexBetween gap="0.3rem">
              <IconButton onClick={() => setIsComments(!isComments)}>
                <ChatBubbleOutlineOutlined />
              </IconButton>
              <Typography component="span">{comments.length}</Typography>
            </FlexBetween>
          </FlexBetween>

          <IconButton>
            <ShareOutlined />
          </IconButton>
        </FlexBetween>
        {isComments && (
          <>
            <AddComment postId={_id} />
            <Box component="ul" sx={{ pt: "0.5rem" }}>
              {sortedByDateComments.map((comment) => (
                <Comment key={comment._id} item={comment} />
              ))}
            </Box>
          </>
        )}
      </Box>
      {!likeCount && (
        <Typography
          sx={{
            p: "0.5rem 1rem",
            color: main,
            backgroundColor: palette.neutral.light,
          }}
        >
          Be the first to react
        </Typography>
      )}
      {!comments.length && likeCount > 0 && (
        <Typography
          sx={{
            p: "0.5rem 1rem",
            color: main,
            backgroundColor: palette.neutral.light,
          }}
        >
          Be the first to comment on this
        </Typography>
      )}
    </WidgetWrapper>
  );
};

export default Post;
