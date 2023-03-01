import { useState } from "react";
import { Box, Button, Typography, Modal, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function RegisterModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {user} = useAuth();
  const { palette } = useTheme();
  
  return (
    <div>
      <Button
        fullWidth
        type="submit"
        onClick={handleOpen}
        sx={{
          m: "2rem 0",
          p: "1rem",
          backgroundColor: palette.primary.main,
          color: palette.background.alt,
          "&:hover": { color: palette.primary.main },
        }}
      >
        "REGISTER"
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {user ? (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Register is successful!!
              </Typography>
              <Button as={Link} to="/" onClick={handleClose}>
                Go to LogIn
              </Button>
            </>
          ) : (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Something went wrong. Try one more time!
              </Typography>
              <Button as={Link} to="/register" onClick={handleClose}>
                Try again
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
