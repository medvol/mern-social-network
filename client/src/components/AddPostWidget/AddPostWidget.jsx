import { useState } from "react";
import { useDispatch } from "react-redux";
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
import { addPost } from "state/posts/operations";
import { useAuth } from "hooks/useAuth";

const AddPostWidget = () => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { user } = useAuth();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = palette.neutral.main;
  const medium = palette.neutral.light;
  const dark = palette.neutral.dark;
  const icon = palette.primary.main;

  const handlePost = async () => {
    const formData = new FormData();

    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }
    dispatch(addPost(formData));
    setImage(null);
    setIsImage(false);
    setPost("");
  };

  return (
    <WidgetWrapper sx={{ pb: "0.5rem" }}>
      <FlexBetween gap="1rem">
        <UserImage picturePath={user.picturePath} />
        <InputBase
          placeholder="What's on your mind..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: "85%",
            height:"auto",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "0.5rem 2rem",
          }}
        />
      </FlexBetween>
      {isImage && (
        <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  width="100%"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ ml: "0.5rem" }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider sx={{ margin: "1rem 0" }} />

      <FlexBetween>
        <FlexBetween
          component="button"
          variant="text"
          gap="0.25rem"
          onClick={() => setIsImage(!isImage)}
          sx={{
            padding: "0.75rem",
            border: "none",
            backgroundColor: "transparent",
            "&:hover": {
              cursor: "pointer",
              color: dark,
              backgroundColor: medium,
              borderRadius: 1,
            },
          }}
        >
          <ImageOutlined sx={{ color: icon }} />
          <Typography color={mediumMain} sx={{ "&:hover": { color: dark } }}>
            Image
          </Typography>
        </FlexBetween>

        {isNonMobileScreens ? (
          <>
            <FlexBetween
              gap="0.25rem"
              component="button"
              variant="text"
              sx={{
                padding: "0.75rem",
                border: "none",
                backgroundColor: "transparent",
                "&:hover": {
                  cursor: "pointer",
                  color: dark,
                  backgroundColor: medium,
                  borderRadius: 1,
                },
              }}
            >
              <GifBoxOutlined sx={{ color: "#5f9b41" }} />
              <Typography
                color={mediumMain}
                sx={{ "&:hover": { color: dark } }}
              >
                Clip
              </Typography>
            </FlexBetween>

            <FlexBetween
              gap="0.25rem"
              component="button"
              variant="text"
              sx={{
                padding: "0.75rem",
                border: "none",
                backgroundColor: "transparent",
                "&:hover": {
                  cursor: "pointer",
                  color: dark,
                  backgroundColor: medium,
                  borderRadius: 1,
                },
              }}
            >
              <AttachFileOutlined sx={{ color: "#c37d16" }} />
              <Typography
                color={mediumMain}
                sx={{ "&:hover": { color: dark } }}
              >
                Attachment
              </Typography>
            </FlexBetween>

            <FlexBetween
              gap="0.25rem"
              component="button"
              variant="text"
              sx={{
                padding: "0.75rem",
                border: "none",
                backgroundColor: "transparent",
                "&:hover": {
                  cursor: "pointer",
                  color: dark,
                  backgroundColor: medium,
                  borderRadius: 1,
                },
              }}
            >
              <MicOutlined sx={{ color: "#f5987e" }} />
              <Typography
                color={mediumMain}
                sx={{ "&:hover": { color: dark } }}
              >
                Audio
              </Typography>
            </FlexBetween>
          </>
        ) : (
          <FlexBetween gap="0.25rem">
            <MoreHorizOutlined sx={{ color: mediumMain }} />
          </FlexBetween>
        )}

        <Button
          variant="contained"
          disabled={!post}
          onClick={handlePost}
          sx={{
            backgroundColor: palette.primary.main,
            color: palette.background.alt,
            borderRadius: "3rem",
            "&:hover": {
              backgroundColor: palette.primary.light,
              color: palette.primary.main,
            },
          }}
        >
          POST
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default AddPostWidget;
