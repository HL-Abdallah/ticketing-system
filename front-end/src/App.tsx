import { light, dark } from "./styles/MUIThemes";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import AppLayout from "./routes/App/AppLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./routes/LandingPage/LandingPage";
import CssBaseline from "@mui/material/CssBaseline";
import DashboardPage from "./routes/App/Dashboard/DashboardPage";
import Reports from "./routes/App/Reports/ReportsPage";
import TicketsPage from "./routes/App/Tickets/TicketsPage";
import SettingsPage from "./routes/App/Settings/SettingsPage";
import UsersPage from "./routes/App/Users/UsersPage";
import NewTicket from "./routes/App/Tickets/NewTicket";

const App = () => {
  const [theme, setTheme] = useState(light);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<LandingPage />} />
          <Route path="/app" element={<AppLayout />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="tickets" element={<TicketsPage />} />
            <Route path="tickets/new" element={<NewTicket />} />
            {/* then a divider */}
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;