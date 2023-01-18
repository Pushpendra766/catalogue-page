import { React, useState } from "react";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

export const Product = ({ product }) => {
    const descLong = product && product.description.length > 150 && true;
    const [openDescription, setOpenDescription] = useState();
    return (
        <>
            {!product ? (
                <div>Loading ....</div>
            ) : (
                <Card style={{ width: "18rem" }} className="mx-auto">
                    <Card.Img
                        style={{ width: "14rem", height: "15rem" }}
                        className="p-1"
                        src={product.image}
                    />
                    <Badge
                        bg="success"
                        style={{
                            position: "absolute",
                            right: "4rem",
                            top: "13rem",
                        }}
                    >
                        {product.category}
                    </Badge>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            {!descLong || product.id === openDescription
                                ? product.description
                                : product.description.slice(0, 151) + "..."}
                            <span
                                className="text-primary"
                                style={{ cursor: "pointer" }}
                                onClick={() => setOpenDescription(product.id)}
                            >
                                {descLong &&
                                    product.id !== openDescription &&
                                    "Read More"}
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}
        </>
    );
};
