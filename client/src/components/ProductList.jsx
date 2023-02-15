import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardP from "../layout/CardP";
import "../App.css";
const ProductList = () => {
    const [loaded, setLoaded] = useState(false);
    const [products, setProducs] = useState([]);
    const removeFromDom = (productId) => {
        setProducs(products.filter((product) => product._id !== productId));
    };

    useEffect(() => {
        axios.get("http://localhost:8000/api/product").then((res) => {
            setProducs(res.data);
            setLoaded(true);
        });
    }, []);

    return (
        <>
            {loaded ? (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column-reverse",
                        gap: 1,
                    }}
                >
                    {products.map((product, idx) => {
                        return (
                            <CardP
                                key={idx}
                                id={product._id}
                                title={product.title}
                                removeFromDom={removeFromDom}
                            />
                        );
                    })}
                </Box>
            ) : (
                <div className="contLoader">
                    <span className="loader"></span>
                </div>
            )}
        </>
    );
};
export default ProductList;
