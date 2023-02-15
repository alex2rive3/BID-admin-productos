import { CardContent, Card, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ListAltIcon from "@mui/icons-material/ListAlt";
import EditIcon from "@mui/icons-material/Edit";
import DeleteButton from "../components/DeleteButton";
const CardP = ({ id, title, removeFromDom }) => {
    return (
        <Card sx={{ minWidth: 400 }}>
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography
                    sx={{ fontSize: 14, fontWeight: 800 }}
                    color="primary"
                    gutterBottom
                >
                    {title}
                </Typography>
                <Typography
                    component={"div"}
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "end",
                        gap: 1,
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<ListAltIcon />}
                    >
                        <Link className="linkBoton" to={`/${id}`}>
                            Detail
                        </Link>
                    </Button>

                    <DeleteButton
                        productId={id}
                        successCallback={removeFromDom}
                    />

                    <Button
                        variant="contained"
                        color="success"
                        startIcon={<EditIcon />}
                    >
                        <Link
                            className="linkBoton"
                            to={"/product/" + id + "/edit"}
                        >
                            Edit
                        </Link>
                    </Button>
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardP;
