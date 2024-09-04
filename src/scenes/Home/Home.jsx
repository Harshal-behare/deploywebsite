import React, { useState } from "react";
import { Box, Button, Typography, IconButton, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeSidebar from "../global/HomeSidebar"; // Import the new HomeSidebar
import { useMode } from "../../theme";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LoginIcon from "@mui/icons-material/Login";
import roadImage from "../../assets/road.jpg"; 
import pipeImage from "../../assets/pipe.jfif"; 
import lightImage from "../../assets/light.jfif"; 

// Placeholder image URLs
const images = [
    roadImage,
    pipeImage,
    lightImage,
];

const Home = () => {
    const [theme, colorMode] = useMode(); // Use the custom hook for theme and color mode
    const navigate = useNavigate(); // Use navigate for routing

    // State for managing the current slide index
    const [current, setCurrent] = useState(0);

    // Handler to go to the previous slide
    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    // Handler to go to the next slide
    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleLoginClick = () => {
        navigate("/login"); // Navigate to the login page
    };

    return (
        <Box display="flex" height="100vh">
            <HomeSidebar />
            <Box flexGrow={1} p={2}>
                <Box display="flex" justifyContent="flex-end" p={2}>
                    {/* Theme Toggle Button */}
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === "dark" ? (
                            <LightModeIcon />
                        ) : (
                            <DarkModeIcon />
                        )}
                    </IconButton>

                    {/* Login Button with Icon */}
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<LoginIcon />} // Add icon to the button
                        onClick={handleLoginClick}
                    >
                        Login
                    </Button>
                </Box>
                <Box p={2}>
                    <Typography variant="h1">Welcome to the Home Page</Typography>
                    {/* Add more content here */}
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        padding: 2,
                        borderRadius: 1,
                        height: "600px", // Ensure the container has a height
                        position: "relative", // Relative positioning for buttons
                    }}
                >
                    <img src={images[current]} alt="Slideshow" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <Box sx={{ position: "absolute", bottom: 10, display: "flex", justifyContent: "space-between", width: "100%", px: 2 }}>
                        <Button variant="contained" onClick={prevSlide}>Previous</Button>
                        <Button variant="contained" onClick={nextSlide}>Next</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
