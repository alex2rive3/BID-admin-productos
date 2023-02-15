import { Container, Paper } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
    return (
        <>
            <Paper
                elevation={3}
                sx={{
                    width: "80%",
                    m: "auto",
                }}
            >
                <Container maxWidth="md">
                    <NavBar />
                    <Outlet />
                </Container>
            </Paper>
        </>
    );
};

export default Layout;
