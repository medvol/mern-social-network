import {
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  IconButton,
} from "@mui/material";
import { Message, Notifications, Help } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { logOut } from "state/auth/operations";
import { ModeButton } from "components/ModeButton/ModeButton";
import { useAuth } from "hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const MenuItems = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;

  const fullName = `${user.firstName} ${user.lastName}`;
  return (
    <>
      <ModeButton />
      <IconButton>
        <Message sx={{ fontSize: "25px" }} />
      </IconButton>
      <IconButton>
        <Notifications sx={{ fontSize: "25px" }} />
      </IconButton>
      <IconButton>
        <Help sx={{ fontSize: "25px" }} />
      </IconButton>

      <FormControl variant="standard" value={fullName}>
        <Select
          value={fullName}
          sx={{
            backgroundColor: neutralLight,
            width: "150px",
            borderRadius: "0.25rem",
            p: "0.25rem 1rem",
            "& .MuiSvgIcon-root": {
              pr: "0.25rem",
              width: "3rem",
            },
            "& .MuiSelect-select:focus": {
              backgroundColor: neutralLight,
            },
          }}
          input={<InputBase />}
        >
          <MenuItem value={fullName}>
            <Typography>{fullName}</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              dispatch(logOut());
              navigate("/");
            }}
          >
            Log Out
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
