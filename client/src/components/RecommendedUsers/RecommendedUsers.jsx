import { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem, Typography, useTheme } from "@mui/material";
import PostTitle from "components/PostTitle/PostTitle";
import WidgetWrapper from "components/WidgetWrapper/WidgetWrapper";

const RecommendedUsers = () => {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(false);
  const { palette } = useTheme();

  useEffect(() => {
    const abortController = new AbortController();
    const getRecommendedUsers = async () => {
      try {
        setError(false);
        const { data } = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/users/recommended`,
          {
            signal: abortController.signal,
          }
        );
        setUsers(data);
      } catch (error) {
        if (error.name === "AbortError") return;
        setError(true);
      }
    };
    getRecommendedUsers();
    return () => abortController.abort();
  }, []);

  return (
    <WidgetWrapper
      sx={{
        height: "30vh",
        mt: "2rem",
        pt: 0,
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{
          position: "sticky",
          top: 0,
          pt: "1rem",
          pb: "0.5rem",
          backgroundColor: palette.background.alt,
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          zIndex: 1,
        }}
      >
        Recommended for you
      </Typography>

      {users && (
        <List sx={{ gap: "1.5rem" }}>
          {users.map((user) => (
            <ListItem key={user._id} sx={{ display: "block", px: "0.5rem" }}>
              <PostTitle owner={user} />
            </ListItem>
          ))}
        </List>
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
