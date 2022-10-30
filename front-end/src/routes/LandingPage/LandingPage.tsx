import { Paper, Stack, Typography, Button, useMediaQuery } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));
  return (
    <Paper sx={{ p: 4, width: isMobile ? "90%" : "500px" }} elevation={6}>
      <form>
        <Stack gap={3}>
          <Typography variant="h5">Website is under construction 🚧</Typography>
          <Typography variant="body1">
            You can still checkout the app below ⬇
          </Typography>
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent={"space-between"}
            gap={3}
          >
            <Button onClick={() => navigate("/login")} variant="contained">
              Login
            </Button>
            <Button onClick={() => navigate("/register")} variant="contained">
              Register
            </Button>
            <Button onClick={() => navigate("/app")} variant="contained">
              Dashboard
            </Button>
          </Stack>
        </Stack>
      </form>
    </Paper>
  );
}

export default LandingPage;
