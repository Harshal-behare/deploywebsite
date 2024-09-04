import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import WarningOutlinedIcon from "@mui/icons-material/WarningOutlined"; // Corrected icon for Emergency
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined"; // Corrected icon for Complaint Box

const HomeSidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: "#1a1a1a",
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: "#fff",
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                ml="15px"
                            >
                                <Typography variant="h3" color="#fff">
                                    Home
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <MenuItem
                            title="Home"
                            to="/"
                            icon={<HomeOutlinedIcon />}
                        >
                            <Typography>Home</Typography>
                            <Link to="/" />
                        </MenuItem>
                        <MenuItem
                            title="Emergency"
                            to="/emergency"
                            icon={<WarningOutlinedIcon />} // Corrected icon
                        >
                            <Typography>Emergency</Typography>
                            <Link to="/emergency" />
                        </MenuItem>
                        <MenuItem
                            title="Complaint Box"
                            to="/complaint-box"
                            icon={<FeedbackOutlinedIcon />} // Corrected icon
                        >
                            <Typography>Complaint Box</Typography>
                            <Link to="/complaint-box" />
                        </MenuItem>
                        <MenuItem
                            title="Discussion Forum"
                            to="/discussion-forum"
                            icon={<ForumOutlinedIcon />}
                        >
                            <Typography>Discussion Forum</Typography>
                            <Link to="/discussion-forum" />
                        </MenuItem>
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default HomeSidebar;
