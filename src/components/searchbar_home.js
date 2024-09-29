import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Grid,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { format } from "date-fns";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const SimplifiedMultiCitySearchBar = () => {
  const [from, setFrom] = useState("India (IN)");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [travelers, setTravelers] = useState("1 Adult, Economy");
  const [addNearbyAirports, setAddNearbyAirports] = useState(false);
  const [directFlights, setDirectFlights] = useState(false);

  const handleSearch = () => {
    const formattedDepartDate = departDate
      ? format(departDate, "yyyy-MM-dd")
      : "";
    const formattedReturnDate = returnDate
      ? format(returnDate, "yyyy-MM-dd")
      : "";
    console.log("Search clicked", {
      from,
      to,
      departDate: formattedDepartDate,
      returnDate: formattedReturnDate,
      travelers,
      addNearbyAirports,
      directFlights,
    });
  };

  const inputStyle = {
    bgcolor: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "& .MuiInputLabel-root": {
      color: "#666",
      "&.Mui-focused": {
        color: "#666",
      },
    },
    "& .MuiInputBase-input": {
      color: "#333",
      paddingTop: "20px",
      paddingBottom: "10px", // Add padding to the bottom for better spacing
    },
  };

  const swapLocations = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const CustomInput = ({
    label,
    value,
    onChange,
    startAdornment,
    ...props
  }) => (
    <FormControl fullWidth variant="outlined" sx={inputStyle}>
      <InputLabel
        sx={{ pointerEvents: "none", top: "10px", left: "14px", color: "#666" }}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        value={value}
        onChange={onChange}
        startAdornment={
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        }
        {...props}
        sx={{
          "& .MuiOutlinedInput-root": {
            paddingTop: "20px", // Ensure the input field has some top padding
          },
        }}
      />
    </FormControl>
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ p: 2, bgcolor: "#042759", borderRadius: 2 }}>
        <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
          Create a multi-city route
        </Typography>
        <Grid container spacing={1} alignItems="stretch">
          <Grid item xs={12} sm={6} md={2.4}>
            <CustomInput
              label="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              startAdornment={<FlightTakeoffIcon color="action" />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Box
              sx={{ display: "flex", alignItems: "stretch", height: "100%" }}
            >
              <CustomInput
                label="To"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                startAdornment={<FlightTakeoffIcon color="action" />}
              />
              <IconButton
                onClick={swapLocations}
                sx={{ ml: 1, color: "white", alignSelf: "center" }}
              >
                <SwapHorizIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <DatePicker
              label="Depart"
              value={departDate}
              onChange={(newValue) => setDepartDate(newValue)}
              slots={{
                textField: (params) => (
                  <CustomInput
                    {...params}
                    startAdornment={<CalendarTodayIcon color="action" />}
                  />
                ),
              }}
              slotProps={{
                textField: {
                  sx: { bgcolor: "white" },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <DatePicker
              label="Return"
              value={returnDate}
              onChange={(newValue) => setReturnDate(newValue)}
              slots={{
                textField: (params) => (
                  <CustomInput
                    {...params}
                    startAdornment={<CalendarTodayIcon color="action" />}
                  />
                ),
              }}
              slotProps={{
                textField: {
                  sx: { bgcolor: "white" },
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={2.4}>
            <CustomInput
              label="Travelers and cabin class"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              startAdornment={<PersonIcon color="action" />}
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={addNearbyAirports}
                  onChange={(e) => setAddNearbyAirports(e.target.checked)}
                  sx={{
                    color: "white", // Set the checkbox color when unchecked
                    "&.Mui-checked": {
                      color: "white", // Set the checkbox color when checked
                    },
                  }}
                />
              }
              label="Add nearby airports"
              sx={{ color: "white" }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={directFlights}
                  onChange={(e) => setDirectFlights(e.target.checked)}
                  sx={{
                    color: "white", // Set the checkbox color when unchecked
                    "&.Mui-checked": {
                      color: "white", // Set the checkbox color when checked
                    },
                  }}
                />
              }
              label="Direct flights"
              sx={{ color: "white" }}
            />
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            sx={{ px: 4, bgcolor: "#0770e3" }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default SimplifiedMultiCitySearchBar;
