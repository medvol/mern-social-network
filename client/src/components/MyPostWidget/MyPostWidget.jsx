import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import Dropzone from "react-dropzone";
import { FlexBetween } from "components/FlexBetween/FlexBetween.styled";
import UserImage from "components/UserImage/UserImage";
import WidgetWrapper from "components/WidgetWrapper/WidgetWrapper";
import { setPosts } from "state";
