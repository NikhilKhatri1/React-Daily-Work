import { useState, useEffect } from "react";
import axios from 'axios';

export function FakeStore() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Load categories from the API
    function loadCategories() {
        axios.get("https://fakestoreapi.com/products/categories")
            .then(response => {
                response.data.unshift("All");
                setCategories(response.data);
            })
            .catch(error => console.error("Error fetching categories:", error));
    }

    // Load products from the API
    function loadProducts(category = "All") {
        const url = category === "All"
            ? "https://fakestoreapi.com/products"
            : `https://fakestoreapi.com/products/category/${category}`;

        axios.get(url)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => console.error("Error fetching products:", error));
    }

    function handleSelect(e) {
        const newCategory = e.target.value;
        setSelectedCategory(newCategory);
        loadProducts(newCategory);
    }

    useEffect(() => {
        loadCategories();
        loadProducts();
    }, []); // Empty dependency array ensures this runs only on mount

    return (
        <div style={{ backgroundColor: "#111", height: "100%" }} className="p-lg-5 p-0 pt-lg-0">
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
                                {/* Dynamically generate categories */}
                                {categories.slice(1).map(category => (
                                    <li className="nav-item me-lg-5 me-0 fs-6 fw-semibold" key={category}>
                                        <a className="nav-link" href="#" onClick={() => handleSelect({ target: { value: category } })}>{category}</a>
                                    </li>
                                ))}
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
                    <div className="col-lg-4 col-12 my-4 my-lg-0" style={{ backgroundColor: "#333", width: "300px", padding: "0px", borderRadius: "4px" }}>
                        <h3 className="text-white fw-bold text-center">Categories</h3>
                        <select onChange={handleSelect} className="form-select" size={5} style={{ backgroundColor: "transparent", color: "white" }}>
                            {
                                categories.map(category => <option value={category} key={category}>{category.toUpperCase()}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-lg-8 col-12 my-1 my-lg-0 ms-lg-4 d-flex flex-column" style={{ backgroundColor: "#333", padding: "0px", borderRadius: "4px", width: "74%" }}>
                        <h3 className="text-white fw-bold text-center">Products</h3>
                        <div className="d-flex flex-wrap overflow-auto justify-content-between" style={{ height: "400px" }}>
                            {
                                products.length > 0 ? (
                                    products.map(product => (
                                        <div className="card mt-2 mx-lg-2 mx-auto" style={{ height: "390px", width: "250px", backgroundColor: "#fff" }} key={product.id}>
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
                                ) : (
                                    <p className="text-white text-center">No products available</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
