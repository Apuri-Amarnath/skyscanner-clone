import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import HotelIcon from "@mui/icons-material/Hotel";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import SimplifiedMultiCitySearchBar from "../components/searchbar_home";

const Home = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        {/* Search Section */}
        <Box
          sx={{
            backgroundColor: "#002B5B",
            color: "#fff",
            p: 4,
            borderRadius: 2,
            mb: 5,
          }}
        >
          <Typography variant="h4" gutterBottom>
            The best flight offers from anywhere, to everywhere
          </Typography>
          <SimplifiedMultiCitySearchBar/>
        </Box>

        {/* Explore Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <FlightTakeoffIcon fontSize="large" />
                <Typography variant="h6" gutterBottom>
                  Flights
                </Typography>
                <Button variant="outlined" fullWidth>
                  Explore Flights
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <HotelIcon fontSize="large" />
                <Typography variant="h6" gutterBottom>
                  Hotels
                </Typography>
                <Button variant="outlined" fullWidth>
                  Explore Hotels
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <DriveEtaIcon fontSize="large" />
                <Typography variant="h6" gutterBottom>
                  Car Hire
                </Typography>
                <Button variant="outlined" fullWidth>
                  Explore Car Hire
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Promotional Section */}
        <Box sx={{ mt: 5, textAlign: "center" }}>
          <img
            src="https://via.placeholder.com/1024x300.png?text=Low-cost+Wanderlust+Promo+Banner"
            alt="Promo Banner"
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
        </Box>
      </Container>
    </div>
  );
};

export default Home;
