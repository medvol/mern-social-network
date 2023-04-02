import { Box } from "@mui/material";

const UserImage = ({ picturePath, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={picturePath}
      />
    </Box>
  );
};

export default UserImage;
