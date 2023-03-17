import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import { FlexBetween } from "components/FlexBetween/FlexBetween.styled";
import PostTitle from "components/PostTitle/PostTitle";
import WidgetWrapper from "components/WidgetWrapper/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";

const Post = ({ item }) => {
  return <div>Post</div>;
};

export default Post;
