import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import ProductForm from "./ProductForm";
import { useParams, useNavigate } from "react-router-dom";
const ProductUpdate = () => {
    const navigate = useNavigate();
    // mantener el control de lo que se escribe a través del gancho useState
    const initialValues = {
        title: "",
        price: 0,
        description: "",
    };
    const { id } = useParams("");
    const [products, setProducts] = useState(initialValues);

    useEffect(() => {
        const getProduct = async () => {
            const res = await axios.get(
                `http://localhost:8000/api/product/${id}`
            );
            setProducts(res.data);
        };
        getProduct();
    }, [id]);
    //gestor cuando se envía el formulario
    const updateProduct = async (values, actions) => {
        //evitar el comportamiento por defecto de submit
        try {
            const result = await axios.put(
                `http://localhost:8000/api/product/${id}`,
                values
            );
            console.log(result);
            if (result.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "GENIAL!!!",
                    text: `Se ha actualizado el producto ${result.data.title} perfectamente!`,
                });
                navigate("/product");
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
                initialValues={products}
                textAction="Update"
                onSubmit={updateProduct}
            />
        </>
    );
};

export default ProductUpdate;
