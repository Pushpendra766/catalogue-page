import { React, useEffect, useState } from "react";
import axios from "axios";
import { Product } from "./Product";
import Row from "react-bootstrap/Row";

export const Catalogue = ({ category, setStats, setLoading }) => {
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
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    return (
        <div className="mt-2 px-sm-2 py-5 mx-sm-2 px-md-5 mx-md-5">
            <Row className="gap-3 mx-auto">
                {products.map(product => {
                    return <Product key={product.id} product={product} />;
                })}
            </Row>
        </div>
    );
};
