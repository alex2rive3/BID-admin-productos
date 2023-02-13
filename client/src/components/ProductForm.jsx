import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Container, Button, TextField, Box, FormControl } from "@mui/material/";
const ProductForm = () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //gestor cuando se envía el formulario
    const onSubmitHandler = async (e) => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
        //hacer una petición POST para crear una nueva persona
        try {
            const result = await axios.post(
                "http://localhost:8000/api/product/new",
                {
                    title,
                    price,
                    description,
                }
            );
            console.log(result);
            if (result.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "GENIAL!!!",
                    text: `Se ha agregado el producto ${result.data.title} perfectamente!`,
                });
                setTitle("");
                setPrice("");
                setDescription("");
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Ops que mal!!!",
                text: `Error: ${
                    error?.response?.data?.message || error.message
                }`,
            });
        }
    };
    //onChange para actualizar title y price
    return (
        <Container maxWidth="md">
            <h1 style={{ textAlign: "center", margin: "8px" }}>
                Register New Product
            </h1>
            <Box
                component="form"
                sx={{
                    width: 400,
                    maxWidth: "100%",
                    m: "auto",
                }}
                noValidate
                autoComplete="off"
                onSubmit={onSubmitHandler}
            >
                <TextField
                    sx={{ mb: 1 }}
                    fullWidth
                    label="Title"
                    variant="standard"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <TextField
                    sx={{ mb: 1 }}
                    label="Price"
                    fullWidth
                    variant="standard"
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
                <TextField
                    sx={{ mb: 1 }}
                    fullWidth
                    label="Descrition"
                    variant="standard"
                    multiline
                    rows={4}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />

                <FormControl fullWidth sx={{ m: "auto" }}>
                    <Button type="submit" variant="contained">
                        Registrar
                    </Button>
                </FormControl>
                <hr />
            </Box>
        </Container>
    );
};

export default ProductForm;
