import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import PostTitle from "components/PostTitle/PostTitle";
import WidgetWrapper from "components/WidgetWrapper/WidgetWrapper";

const RecommendedUsers = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(false);
  const { palette } = useTheme();

  useEffect(() => {
    const getRecommendedUsers = async () => {
      try {
        setError(false);
        const { data } = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/users/recommended`
        );
        setUsers(data);
      } catch (error) {
        setError(true);
      }
    };
    getRecommendedUsers();
  }, []);

  return (
    <WidgetWrapper
      sx={{
        height: "30vh",
        mt: "2rem",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ pb: "0.5rem" }}
      >
        Recommended for you
      </Typography>
      <Divider sx={{ mb: "0.75rem" }} />
      {users && (
        <Box display="flex" flexDirection="column" gap="1.5rem" component="ul">
          {users.map((user) => (
            <li key={user._id}>
              <PostTitle owner={user} />
            </li>
          ))}
        </Box>
      )}
      {error && (
        <Typography
          color={palette.neutral.dark}
          variant="h6"
          fontWeight="400"
          sx={{ mb: "1.5rem", fontSize: "0.75rem" }}
        >
          Something went wrong...
        </Typography>
      )}
    </WidgetWrapper>
  );
};

export default RecommendedUsers;
