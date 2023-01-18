import { React, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

export const NavBar = ({ setCategory, setLoading }) => {
    const categories = [
        "All",
        "Men's Clothing",
        "Jewelery",
        "Electronics",
        "Women's Clothing",
    ];
    const [title, setTitle] = useState("Select Category");
    return (
        <Navbar bg="dark" variant="dark">
            <Container className="d-flex justify-content-between">
                <Navbar.Brand href="#home">Daphnis Labs</Navbar.Brand>
                <div>
                    <Nav className="me-auto">
                        <NavDropdown title={title} id="basic-nav-dropdown">
                            {categories.map(category => {
                                return (
                                    <NavDropdown.Item
                                        key={category}
                                        onClick={() => {
                                            setTitle(category);
                                            setCategory(category.toLowerCase());
                                            setLoading(true);
                                        }}
                                    >
                                        {category}
                                    </NavDropdown.Item>
                                );
                            })}
                        </NavDropdown>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
};
