import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";

const CardDet = ({ _id, title, price, description }) => {
    return (
        <>
            <Card sx={{ maxWidth: 375, m: "auto" }}>
                <CardContent
                    component="div"
                    sx={{ display: "flex", flexDirection: "column", gap: 1.3 }}
                >
                    <Typography variant="h5">Title: {title}</Typography>
                    <Typography variant="h6">Precio: {price}</Typography>
                    <Typography>Descripcion: {description} </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                    }}
                >
                    <Button variant="outlined" color="primary">
                        <Link to={`/product`}>Volver</Link>
                    </Button>
                    <Button variant="contained" color="success">
                        <Link
                            className="linkBoton"
                            to={"/product/" + _id + "/edit"}
                        >
                            Edit
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};
export default CardDet;
