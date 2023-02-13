import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
    return (
        <>
            <Container maxWidth="md">
                <NavBar />
                <Outlet />
            </Container>
        </>
    );
};

export default Layout;
