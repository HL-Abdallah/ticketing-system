import { useState } from "react";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { register } from "../../services/User/UserService";

const Register = () => {
  // state
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
  const [data, setData] = useState({
    email: "",
    password: "",
    username: "",
    role: "",
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
    const result = register(data);
    console.log("result is : ", result);
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
            <Typography variant="h4">Register</Typography>
          </Stack>
          <TextField
            value={data.username}
            onChange={handleChange}
            label="Username"
            name="username"
          />
          <TextField
            value={data.email}
            onChange={handleChange}
            label="Email"
            name="email"
            type="email"
          />
          <TextField
            value={data.password}
            name="password"
            onChange={handleChange}
            label="Password"
            type="password"
          />
          <FormControl>
            <InputLabel>Role</InputLabel>
            <Select
              name="role"
              value={data.role}
              onChange={handleChange}
              label="Role"
            >
              <MenuItem value={"User"}>Client</MenuItem>
              <MenuItem value={"Admin"}>Admin</MenuItem>
              <MenuItem value={"Tech_Support"}>Tech Support</MenuItem>
            </Select>
          </FormControl>
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent={"space-between"}
            p={2}
          >
            <Button
              onClick={() => {
                setData({ email: "", password: "", username: "", role: "" });
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

export default Register;
