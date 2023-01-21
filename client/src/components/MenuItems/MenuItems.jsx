import {
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
} from "@mui/material";
import { Message, Notifications, Help } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "state/auth/authSlice";
import { ModeButton } from "components/ModeButton/ModeButton";
import { useAuth } from "hooks/useAuth";

export const MenuItems = () => {
  const dispatch = useDispatch();
  // const { user } = useAuth();
  // console.log(user);
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;

  const fullName = `${user.firstName} ${user.lastName}`;
  return (
    <>
      <ModeButton />
      <Message sx={{ fontSize: "25px" }} />
      <Notifications sx={{ fontSize: "25px" }} />
      <Help sx={{ fontSize: "25px" }} />
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
          <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
