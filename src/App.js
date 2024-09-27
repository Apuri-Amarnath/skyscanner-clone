import {
  AppBar,
  Box,
  Button,
  Container,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Route, Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Hotels from "./pages/Hotels";
import CarHire from "./pages/CarHire";
import Login from "./pages/Login";
import Flights from "./pages/Flights";
import React from "react";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import CarRentalIcon from "@mui/icons-material/CarRental";

function App() {
  const location = useLocation();
  const buttonStyles = (isActive) => ({
    backgroundColor: isActive ? "#0062e3" : "transparent",
    borderRadius: "20px",
    border: "2px solid #FFF",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#154679",
    },
    marginRight: "10px",
    textTransform: "Capitalize",
    fontWeight: "bold",
  });
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#001F3F" }}>
        <Container>
          <Toolbar>
            <Typography
              variant="h5"
              component={RouterLink}
              to="/"
              sx={{ flexGrow: 1,marginRight:"10px", color: "#FFF", textDecoration: "none" }}
            >
              Skyscanner - Clone
            </Typography>
            <Button
              color="inherit"
              component={RouterLink}
              to="/login"
              sx={{
                "&:hover": {
                  backgroundColor: "#154679",
                },
              }}
            >
              Login
            </Button>
          </Toolbar>
        </Container>
        <Container sx={{ padding: "30px 0px", justifyContent: "center" }}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            startIcon={<FlightIcon />}
            sx={buttonStyles(
              location.pathname === "/" || location.pathname === "/flights",
            )}
          >
            Flights
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/hotels"
            startIcon={<HotelIcon />}
            sx={buttonStyles(location.pathname === "/hotels")}
          >
            Hotels
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/carhire"
            startIcon={<CarRentalIcon />}
            sx={buttonStyles(location.pathname === "/carhire")}
          >
            Car Hire
          </Button>
        </Container>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/carhire" element={<CarHire />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
