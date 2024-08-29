import { useState, useEffect } from "react";
import axios from 'axios';

export function FakeStore() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    // Load categories from the API
    function LoadCategories() {
        axios.get("https://fakestoreapi.com/products/categories")
            .then(response => {
                response.data.unshift("All");
                setCategories(response.data);
            })
            .catch(error => console.error("Error fetching categories:", error));
    }

    // Load products from the API
    function LoadProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => console.error("Error fetching products:", error));
    }

    useEffect(() => {
        LoadCategories();
        LoadProducts();
    }, []); // Empty dependency array ensures this runs only on mount

    return (
        <div style={{ backgroundColor: "#111", height: "100vh" }} className="p-lg-5 p-0 pt-lg-0">
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#333" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand fw-bold fs-4" href="#">FakeStore</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                                <li className="nav-item me-lg-5 me-0 fs-6 fw-semibold">
                                    <a className="nav-link active" href="#">Home</a>
                                </li>
                                <li className="nav-item me-lg-5 me-0 fs-6 fw-semibold">
                                    <a className="nav-link" href="#">Fashion</a>
                                </li>
                                <li className="nav-item me-lg-5 me-0 fs-6 fw-semibold">
                                    <a className="nav-link" href="#">Electronics</a>
                                </li>
                                <li className="nav-item me-lg-5 me-0 fs-6 fw-semibold">
                                    <a className="nav-link" href="#">Jewelry</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
            <section className="main mt-lg-5 mt-3 container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-4" style={{ backgroundColor: "#333", width: "300px", padding: "0px", borderRadius: "4px" }}>
                        <h3 className="text-white fw-bold text-center">Categories</h3>
                        <select className="form-select" size={5} style={{ backgroundColor: "transparent", color: "white" }}>
                            {
                                categories.map(category => <option value={category} key={category}>{category.toUpperCase()}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-8 ms-lg-4" style={{ backgroundColor: "#333", padding: "0px", borderRadius: "4px", width: "74%" }}>
                        <h3 className="text-white fw-bold text-center">Products</h3>
                        <div className="d-flex flex-wrap overflow-auto justify-content-between" style={{ height: "400px" }}>
                            {
                                products.map(product => (
                                    <div className="card mt-2 mx-2" style={{ height: "390px", width: "250px", backgroundColor: "#fff" }} key={product.id}>
                                        <img src={product.image} alt={product.title} className="card-img-top" style={{ height: "100px", objectFit: "contain" }} />
                                        <div className="card-header">
                                            <p className="card-title fw-bold" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{product.title}</p>
                                        </div>
                                        <div className="card-body" style={{ overflow: "auto", height: "90px" }}>
                                            <p className="card-text">
                                                {product.description}
                                            </p>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-warning w-100">Add to Cart</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}
