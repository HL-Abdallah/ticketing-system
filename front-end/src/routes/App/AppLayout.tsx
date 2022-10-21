import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Divider,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import DashboardIcon from "@mui/icons-material/Dashboard";
import styles from "./AppLayout.module.css";
import logo from "../../assets/ticket-logo.jpg";
import ProfileOptions from "../../components/ProfileOptions";

const AppLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [isLightTheme, setIsLightTheme] = useState(true);
  const drawerWidth = 320;
  const handleMenuToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <AppBar color="inherit" elevation={1} sx={{ maxHeight: "64px" }}>
        <Toolbar>
          <div className={styles.navbar}>
            <div className={styles.left}>
              <IconButton
                color="inherit"
                onClick={handleMenuToggle}
                style={{ height: "50px" }}
              >
                <MenuIcon />
              </IconButton>
              <div className={styles.right}>
                <img className={styles.logoImg} src={logo} alt="logo" />
                <h1 className={styles.logoText}>TICKETING SYSTEM</h1>
              </div>
            </div>
            <div className={styles.right}>
              <ProfileOptions />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        open={drawerOpen}
        variant="persistent"
        PaperProps={{ sx: { width: `${drawerWidth}px` } }}
      >
        <Toolbar />
        <List
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Side Navigation Menu
            </ListSubheader>
          }
        >
          <Link to="dashboard">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Dashboard"
                  secondary="Analytics & Statistics"
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="users">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Users"
                  secondary="Manage your beneficiaries"
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="tickets">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ConfirmationNumberIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Tickets"
                  secondary="All your customer complaints in one place"
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Divider variant="middle" />
          <Link to="reports">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AssessmentIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Reports"
                  secondary="Measure your performance with detailed reports"
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="settings">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Settings"
                  secondary="Customise the inner workings"
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <Toolbar />
      <Paper
        sx={{
          flexGrow: 1,
          width: drawerOpen
            ? `calc(100% - ${drawerWidth + "px"})`
            : `calc(100%)`,
          alignSelf: "flex-end",
          padding: 1,
        }}
      >
        <Outlet />
      </Paper>
    </div>
  );
};

export default AppLayout;
