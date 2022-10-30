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
import { Navigate, useNavigate } from "react-router-dom";

const ProfileOptions = () => {
  // state
  const [anchorEl, setAnchorEl] = useState(null);
  const PROFILE_MENU_OPEN = Boolean(anchorEl);
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
