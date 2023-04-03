import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import { FlexBetween } from "components/FlexBetween/FlexBetween.styled";
import PostTitle from "components/PostTitle/PostTitle";
import AddComment from "components/AddComment/AddComment";
import WidgetWrapper from "components/WidgetWrapper/WidgetWrapper";
import { useAuth } from "hooks/useAuth";
import { likePost } from "state/posts/operations";

const Post = ({ item }) => {
  const [isComments, setIsComments] = useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { owner, likes, comments, picturePath, description, _id } = item;
  const isLiked = likes.includes(user._id);
  const likeCount = likes.length;

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  return (
    <WidgetWrapper m="2rem 0" component="li">
      <PostTitle owner={owner} />
      <Typography color={main} sx={{ mt: "1rem" }}>
        {description}
      </Typography>
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
          <AddComment postId={_id}/>
        <Box mt="0.5rem" component="ul">
          {comments.map((comment, i) => (
            <Box key={`${owner.firstName}-${i}`} component="li">
              <Divider />
              <Typography sx={{ color: main, m: "0.5rem 0", pl: "1rem" }}>
                {comment.content}
              </Typography>
            </Box>
          ))}
          <Divider />
        </Box>
        </>
        
      )}
    </WidgetWrapper>
  );
};

export default Post;
