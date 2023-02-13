import { createBrowserRouter } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import Layout from "../layout/Layout";
import NotFound from "../views/NotFount";
import ProductList from "../components/ProductList";
import ProductUpdate from "../components/ProductUpdate";
import Main from "../views/Main";
import Details from "../views/Details";

export default createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                path: "/:id",
                element: <Details />,
            },
            {
                path: "product/:id/edit",
                element: <ProductUpdate />,
            },

            {
                path: "product",
                element: <ProductList />,
            },
            {
                path: "product/new",
                element: <ProductForm />,
            },
        ],
    },
]);
