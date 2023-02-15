import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Box
                sx={{
                    m: 0.5,
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "flex-end",
                    bgcolor: "primary.main",
                    color: "primary.main",
                }}
            >
                <Typography sx={{ minWidth: 140 }}>
                    <NavLink aria-current="page" to="/">
                        Home
                    </NavLink>
                </Typography>
                <Typography sx={{ minWidth: 140 }}>
                    <NavLink aria-current="page" to="product">
                        Products
                    </NavLink>
                </Typography>
                <Typography sx={{ minWidth: 140 }}>
                    <NavLink aria-current="page" to="product/new">
                        New Product
                    </NavLink>
                </Typography>

                <Typography component={"span"}>
                    <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                </Typography>
            </Box>
        </>
    );
};

export default NavBar;
