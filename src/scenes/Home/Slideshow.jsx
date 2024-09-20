// Slideshow.js
import React from "react";
import { Box, useTheme } from "@mui/material";
import { useState } from "react";

const images = [
    "https://via.placeholder.com/800x400?text=Slide+1",
    "https://via.placeholder.com/800x400?text=Slide+2",
    "https://via.placeholder.com/800x400?text=Slide+3",
];

const Slideshow = () => {
    const [current, setCurrent] = useState(0);
    const theme = useTheme();

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                mb: 3,
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary,
                padding: 2,
            }}
        >
            <Box>
                <img src={images[current]} alt="Slideshow" style={{ width: "100%" }} />
            </Box>
            <Box mt={2}>
                <button onClick={prevSlide}>Previous</button>
                <button onClick={nextSlide}>Next</button>
            </Box>
        </Box>
    );
};

export default Slideshow;