import {
  useMediaQuery,
  Paper,
  Stack,
  IconButton,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/User/UserService";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Login = () => {
  // state
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
  const [data, setData] = useState({
    password: "",
    username: "",
  });
  // handlers
  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    //console.log("changing ", name, "to", value);
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("Submitting : ", data);
    login(data);
  };

  return (
    <Paper sx={{ p: 4, width: isMobile ? "90%" : "500px" }} elevation={6}>
      <form>
        <Stack gap={3}>
          <Stack direction={"row"} alignItems="center">
            <Link to="/">
              <IconButton size="small" color="inherit" sx={{ mr: 2 }}>
                <ArrowBackIcon color="inherit" />
              </IconButton>
            </Link>
            <Typography variant="h4">Login</Typography>
          </Stack>
          <TextField
            value={data.username}
            onChange={handleChange}
            label="Username"
            name="username"
          />
          <TextField
            value={data.password}
            name="password"
            onChange={handleChange}
            label="Password"
            type="password"
          />
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent={"space-between"}
            p={2}
          >
            <Button
              onClick={() => {
                setData({ password: "", username: "" });
              }}
            >
              Reset
            </Button>
            <Button onClick={handleSubmit} variant="contained">
              Proceed
            </Button>
          </Stack>
        </Stack>
      </form>
    </Paper>
  );
};

export default Login;
