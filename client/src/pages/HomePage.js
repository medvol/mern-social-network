import { Navbar } from "components/Navbar/Navbar";
import { Box } from "@mui/material";
import Loader from "components/Loader/Loader";

export default function HomePage() {
  return <Box as="header">
    <Navbar />
    <Loader/>
  </Box>;
}
 