import { Box, Typography, useTheme } from "@mui/material";
import { FlexBetween } from "components/FlexBetween/FlexBetween.styled";
import UserImage from "components/UserImage/UserImage";
import { Link } from "react-router-dom";
import { transformDate } from "helpers/transformDate";

const Comment = ({ item }) => {
  const { author, created_at, content } = item;
  const { _id, firstName, lastName, occupation, picturePath } = author;

  const commentDate = transformDate(created_at);

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <Box
      component="li"
      sx={{
        display: "flex",
        alignItems: "start",
        gap: "0.5rem",
        mb: "0.5rem",
        pl: "3rem",
      }}
    >
      <UserImage picturePath={picturePath} size="30px" />

      <Box
        sx={{
          width: "100%",
          p: "0.5rem",
          backgroundColor: palette.neutral.light,
          borderRadius: "0 0.5rem 0.5rem 0.5rem",
        }}
      >
        <FlexBetween sx={{ alignItems: "start" }}>
          <Link to={`/profile/${_id}`}>
            <Typography
              color={main}
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
            <Typography color={medium} fontSize="0.6rem">
              {occupation}
            </Typography>
          </Link>
          <Typography color={medium} fontSize="0.6rem">
            {commentDate}
          </Typography>
        </FlexBetween>

        <Typography color={main} sx={{ pt: "0.25rem" }}>
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default Comment;
