import {
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Button,
} from "@mui/material";
import { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import LogoutIcon from "@mui/icons-material/Logout";
import profile from "../assets/profile.jpg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ProfileOptions: React.FC<any> = ({ isLightMode }) => {
  // state
  const [anchorEl, setAnchorEl] = useState(null);
  const PROFILE_MENU_OPEN = Boolean(anchorEl);
  const theme = useTheme();
  // handlers
  const navigate = useNavigate();
  const handleProfileOpen = (e: any) => {
    setAnchorEl(e.currentTarget);
  };
  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Theme">
        <IconButton onClick={() => isLightMode((prev: boolean) => !prev)}>
          {theme.palette.mode === "light" ? (
            <LightModeIcon />
          ) : (
            <DarkModeIcon />
          )}
        </IconButton>
      </Tooltip>
      <Tooltip title="Notifications">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Messages">
        <IconButton>
          <ChatIcon />
        </IconButton>
      </Tooltip>
      <IconButton onClick={handleProfileOpen}>
        <Avatar alt="profile picture" src={profile} />
      </IconButton>
      <Menu
        open={PROFILE_MENU_OPEN}
        anchorEl={anchorEl}
        onClose={handleProfileClose}
        PaperProps={{
          style: {
            width: 200,
          },
        }}
      >
        <MenuItem>View Profile</MenuItem>
        <Divider />
        <MenuItem>
          <Button
            color="error"
            endIcon={<LogoutIcon />}
            variant={"contained"}
            onClick={() => {
              /* TODO : implement logout logic */
              navigate("/");
            }}
          >
            Logout
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileOptions;
