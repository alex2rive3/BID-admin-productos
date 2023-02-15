import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardDet from "../layout/CardDet";
import "../App.css";
const Details = () => {
    const { id } = useParams("");
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id).then((res) => {
            setProduct({
                ...res.data,
            });
            setLoaded(true);
        });
    }, [id]);
    //const { title, price, description } = product;
    //console.log(product);
    return (
        <>
            {loaded ? (
                <>
                    <CardDet {...product}></CardDet>
                </>
            ) : (
                <div className="contLoader">
                    <span class="loader"></span>
                </div>
            )}
        </>
    );
};

export default Details;
