import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Router>
      <CssBaseline />
      {children}
    </Router>
  );
};
