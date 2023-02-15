import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import ProductForm from "./ProductForm";

const ProductAdd = () => {
    // mantener el control de lo que se escribe a través del gancho useState
    const datosIniciales = {
        title: "",
        price: 0,
        description: "",
    };
    //gestor cuando se envía el formulario
    const createProduct = async (values, actions) => {
        try {
            const result = await axios.post(
                "http://localhost:8000/api/product/new",
                values
            );
            console.log(result);
            if (result.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "GENIAL!!!",
                    text: `Se ha agregado el producto ${result.data.title} perfectamente!`,
                });
                actions.resetForm(datosIniciales);
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
        <>
            <ProductForm
                initialValues={datosIniciales}
                textAction="Register"
                onSubmit={createProduct}
            />
        </>
    );
};

export default ProductAdd;
