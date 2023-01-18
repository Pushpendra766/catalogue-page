import { React, useEffect, useState } from "react";
import axios from "axios";
import { Product } from "./Product";
import Row from "react-bootstrap/Row";

export const Catalogue = ({ category, setStats }) => {
    const baseUrl = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
            .get(
                !category || category === "all"
                    ? baseUrl
                    : `${baseUrl}/category/${category}`
            )
            .then(response => {
                setProducts(response.data);
            });
    }, [category]);

    useEffect(() => {
        let categoryStats = {};
        products.forEach(product => {
            categoryStats[product.category] =
                (categoryStats[product.category] || 0) + 1;
        });
        setStats(categoryStats);
        console.log(categoryStats);
    }, [products]);

    return (
        <div className="mt-2 px-5 py-5 mx-5 ">
            <Row className="gap-3 mx-auto">
                {products.map(product => {
                    return <Product key={product.id} product={product} />;
                })}
            </Row>
        </div>
    );
};
