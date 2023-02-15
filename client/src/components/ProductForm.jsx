import React from "react";
import { useFormik, Field, FormikProvider } from "formik";
//import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Container, Button, TextField, Box, FormControl } from "@mui/material/";
const ProductsErrores = Yup.object().shape({
    title: Yup.string()
        .min(5, "El Titulo debe tener como minimo 5 caracteres")
        .max(50, "El titulo no puede exder los 50 caracteres")
        .required("Requerido"),
    price: Yup.number()
        .integer("Debe ser un numero entero")
        .required("No puedes guardar un producto sin precio")
        .positive("No puede ser negativo"),
    description: Yup.string()
        .required("La descripcion es requerido.")
        .min(10, "Se necesita como minumo 10 caracteres.")
        .max(100, "No puede superar los 100 caracteres"),
});

const ProductForm = ({ initialValues, onSubmit, textAction }) => {
    const formik = useFormik({
        initialValues: initialValues,
        enableReinitialize: "true",
        onSubmit: onSubmit,
        validationSchema: ProductsErrores,
    });

    return (
        <Container maxWidth="md">
            <h1 style={{ textAlign: "center", margin: "8px" }}>
                {textAction} Product
            </h1>
            <Box
                component="form"
                sx={{
                    width: 400,
                    maxWidth: "100%",
                    m: "auto",
                }}
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    fullWidth
                    id="title"
                    variant="standard"
                    type="text"
                    name="title"
                    label="Title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                />

                <TextField
                    fullWidth
                    id="price"
                    name="price"
                    variant="standard"
                    label="Price"
                    type="number"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                    error={formik.touched.price && Boolean(formik.errors.price)}
                    helperText={formik.touched.price && formik.errors.price}
                />
                <TextField
                    fullWidth
                    id="description"
                    name="description"
                    label="Description"
                    type="text"
                    variant="standard"
                    multiline
                    rows={4}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.description &&
                        Boolean(formik.errors.description)
                    }
                    helperText={
                        formik.touched.description && formik.errors.description
                    }
                />

                <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}
                >
                    {textAction} Product
                </Button>
            </Box>
        </Container>
    );
};

export default ProductForm;
