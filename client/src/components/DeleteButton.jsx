import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const DeleteButton = ({ productId, successCallback }) => {
    const deleteProduct = async () => {
        const result = await axios.delete(
            "http://localhost:8000/api/product/" + productId
        );
        await successCallback(productId);
        console.log(result);
    };
    return (
        <Button
            color="error"
            type="reset"
            variant="contained"
            onClick={(e) => deleteProduct(productId)}
            startIcon={<DeleteIcon />}
        >
            Delete
        </Button>
    );
};

export default DeleteButton;
