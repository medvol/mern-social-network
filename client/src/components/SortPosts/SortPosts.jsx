import React, { useState } from "react";
import {
  Box,
  IconButton,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

const options = ["Top", "Recent"];

const SortPosts = ({ handleSort }) => {
  const [sortBy, setSortBy] = useState("Recent");
  const [showFilter, setShowFilter] = useState(false);

  const { palette } = useTheme();

  const handleTabChange = (event, value) => {
    setSortBy(options[value]);
    handleSort(options[value]);
    setShowFilter(false);
  };

  return (
    <Box sx={{ position: "relative", mt: "0.5rem" }}>
      <Box textAlign="right">
        <Typography
          component="span"
          sx={{ py: "0.5rem", mr: "0.25rem", color: palette.neutral.main }}
        >
          Sort By:
        </Typography>
        <Typography component="span">{sortBy}</Typography>
        <IconButton variant="text" onClick={() => setShowFilter(!showFilter)}>
          <ExpandCircleDownIcon />
        </IconButton>
      </Box>
      {showFilter && (
        <Tabs
          orientation="vertical"
          value={options.indexOf(sortBy)}
          onChange={handleTabChange}
          sx={{
            position: "absolute",
            width: "8rem",
            right: 0,
            top: "100%",
            p: 0,
            zIndex: 5,
            borderRadius: "0.5rem",
            backgroundColor: palette.neutral.light,
          }}
        >
          <Tab
            label="Top"
            sx={{ minHeight: "2rem", p: 0, pr: "1rem", alignItems: "end" }}
          />
          <Tab
            label="Recent"
            sx={{ minHeight: "2rem", p: 0, pr: "1rem", alignItems: "end" }}
          />
        </Tabs>
      )}
    </Box>
  );
};

export default SortPosts;
