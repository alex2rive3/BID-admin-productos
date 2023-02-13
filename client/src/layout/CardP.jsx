import { CardContent, Card, Typography, Button } from "@mui/material";
import axios from "axios";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import "../App.css";
const CardP = ({ id, title, removeFromDom }) => {
    const deleteProduct = async (productId) => {
        const result = await axios.delete(
            "http://localhost:8000/api/product/" + productId
        );
        const removeDom = await removeFromDom(productId);
        console.log(result);
    };
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
                    <Button variant="contained" color="primary">
                        <Link className="linkBoton" to={`/${id}`}>
                            Detail
                        </Link>
                    </Button>
                    <Button
                        color="error"
                        type="reset"
                        variant="contained"
                        onClick={(e) => deleteProduct(id)}
                        startIcon={<DeleteIcon />}
                    >
                        Delete
                    </Button>

                    <Button variant="contained" color="success">
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
