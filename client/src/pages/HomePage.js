import { Box } from "@mui/material";
import { Navbar } from "components/Navbar/Navbar";
import UserWidget from "components/UserWidget/UserWidget";

export default function HomePage() {
  return (
    <>
      <Box as="header">
        <Navbar />
      </Box>
      <UserWidget />
    </>
  );
}
