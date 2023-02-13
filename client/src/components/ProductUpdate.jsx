import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Container, Button, TextField, Box, FormControl } from "@mui/material/";
import { useParams } from "react-router-dom";
const ProductForm = () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const { id } = useParams("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`).then((res) => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        });
    }, []);
    //gestor cuando se envía el formulario
    const updateProduct = async (e) => {
        //evitar el comportamiento por defecto de submit
        e.preventDefault();
        try {
            const result = await axios.put(
                `http://localhost:8000/api/product/${id}`,
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
                    text: `Se ha actualizado el producto ${result.data.title} perfectamente!`,
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
    return (
        <Container maxWidth="md">
            <h1 style={{ textAlign: "center", margin: "8px" }}>
                Update Product
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
                onSubmit={updateProduct}
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
