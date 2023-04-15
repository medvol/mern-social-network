import { Box, Button, Typography, Modal} from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: 400,
  height: 300,
  display: 'flex',
  flexDirection:'column',
  alignItems: "center",
  justifyContent:"center",
  p: 4, 
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius:"1rem",
  transform: "translate(-50%, -50%)",
};

export function RegisterModal({open, handleClose}) {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const {user} = useAuth();

  
  return (
    <div>
   
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {user ? (
            <>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ mb: "2rem" }}
              >
                Register is successful!!
              </Typography>
              <Button
                variant="contained"
                size="medium"
                component="a"
                as={Link}
                to="/"
                onClick={handleClose}
              >
                Go to LogIn
              </Button>
            </>
          ) : (
            <>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ mb: "2rem" }}
              >
                Something went wrong. Try one more time!
              </Typography>
              <Button
                variant="contained"
                size="medium"
                as={Link}
                to="/register"
                onClick={handleClose}
              >
                Try again
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
