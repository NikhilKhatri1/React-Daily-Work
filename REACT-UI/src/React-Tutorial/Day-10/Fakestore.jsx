import { useState, useEffect } from "react";
import axios from 'axios';

export function FakeStore() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [cartItem, setCartItem] = useState([]);
    const [itemCount, setItemCount] = useState();
    const [Amount, setAmount] = useState(0);

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
        CountItem();
        CalculateAmount();
    }, []); // Empty dependency array ensures this runs only on mount

    function CountItem() {
        setItemCount(cartItem.length);
    }

    // Calculate Amount
    function CalculateAmount() {
        let totalAmount = 0;

        cartItem.map(item => {
            totalAmount += item.price;
        });

        setAmount(totalAmount.toFixed(2)); // Format to 2 decimal places
    }
    function HandleRemoveItem() {
        console.log(cartItem.splice(cartItem.id, 0, 0));
    }

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
                                <li className="nav-item me-lg-3 me-0 fs-6 fw-semibold">
                                    <a className="nav-link active" href="#">Home</a>
                                </li>
                                {/* Dynamically generate categories */}
                                {categories.slice(1).map(category => (
                                    <li className="nav-item me-lg-3 me-0 fs-6 fw-semibold" key={category}>
                                        <a className="nav-link" href="#" onClick={() => handleSelect({ target: { value: category } })}>{category}</a>
                                    </li>
                                ))}
                            </ul>
                            <form className="d-flex input-group mb-lg-0 mb-3" style={{ width: "250px" }}>
                                <input className="form-control" type="search" placeholder="Search" />
                                <button className="btn btn-outline-success" type="submit"><span className="bi bi-search"></span></button>
                            </form>
                            <button className="btn btn-outline-warning mx-lg-2 mx-0 position-relative my-2 fs-8" data-bs-toggle="modal" data-bs-target="#cart"><span className="bi bi-cart3"></span><span className="badge bg-danger text-white position-absolute rounded rounded-4">{itemCount}</span></button>
                            <div className="modal fade" id="cart">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3>Your Product</h3>
                                            <button className="btn-close" data-bs-dismiss="modal" type="button"></button>
                                        </div>
                                        <div className="modal-body">
                                            <table className="table table-hover border border-1">
                                                <thead>
                                                    <tr>
                                                        <th>Product Name</th>
                                                        <th>Preview</th>
                                                        <th>Price</th>
                                                        <th>Remove</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        cartItem.map((item) =>
                                                            <tr key={item.id}>
                                                                <td>{item.title}</td>
                                                                <td><img src={item.image} style={{ width: "50px", height: "50px" }} /></td>
                                                                <td>{item.price.toLocaleString("en-in", { style: "currency", currency: "INR" })}</td>
                                                                <td><button className=" btn btn-danger mt-2" onClick={HandleRemoveItem}><span className="bi bi-trash"></span></button></td>
                                                            </tr>

                                                        )
                                                    }
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <th colSpan={2}>Total</th>
                                                        <th>{Amount}</th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-primary">Buynow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <section className="main mt-lg-5 mt-3 container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-4 col-12 my-4 my-lg-0" style={{ backgroundColor: "#333", width: "300px", padding: "10px", borderRadius: "4px" }}>
                        <h3 className="text-white fw-bold text-center">Categories</h3>
                        <select onChange={handleSelect} className="form-select fw-bold" style={{ backgroundColor: "transparent", color: "#999" }}>
                            {
                                categories.map(category => <option value={category} key={category}>{category.toUpperCase()}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-lg-8 col-12 my-1 my-lg-0 ms-lg-4 d-flex flex-column" style={{ backgroundColor: "#333", padding: "0px", borderRadius: "4px", width: "74%" }}>
                        <h3 className="text-white fw-bold text-center">Products</h3>
                        <div className="d-flex flex-wrap overflow-auto justify-content-between" style={{ height: "400px", padding: "10px" }}>
                            {
                                products.length > 0 ? (
                                    products.map(product => (
                                        <div className="card mt-2 m-lg-2 mx-auto" style={{ height: "390px", width: "250px", backgroundColor: "#fff" }} key={product.id}>
                                            <img src={product.image} alt={product.title} className="card-img-top" style={{ height: "100px", objectFit: "contain" }} />
                                            <div className="card-header">
                                                <p className="card-title fw-bold" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{product.title}</p>
                                            </div>
                                            <div className="card-body" style={{ overflow: "auto", height: "90px" }}>
                                                <p className="fw-bold" style={{ marginTop: "-10px", marginBottom: "8px" }}>Description:</p>
                                                <p className="card-text d-inline-block text-truncate text-secondary ms-2 fw-semibold" style={{ maxWidth: "200px", marginTop: "-15px", marginBottom: "0px" }}>
                                                    {product.description}
                                                </p>
                                                <p className="fw-bold" style={{ marginTop: "-2px", marginBottom: "2px" }}>Price:</p>
                                                <p className="text-secondary ms-2 fw-semibold">{product.price.toLocaleString("en-in", { style: "currency", currency: "INR" })} </p>
                                                <p className="fw-bold" style={{ marginTop: "-10px", marginBottom: "2px" }}>Ratting & Purchase:</p>
                                                <p className="text-secondary ms-2 fw-semibold" style={{ marginBottom: "-10px" }}> <span className="bi bi-star-fill text-success"></span> {product.rating.rate}, Purchased: <span className="text-success">{product.rating.count}</span></p>
                                            </div>
                                            <div className="card-footer">
                                                <button
                                                    className="btn btn-warning w-100"
                                                    onClick={() => {
                                                        axios.get(`https://fakestoreapi.com/products/${product.id}`)
                                                            .then(response => {
                                                                cartItem.push(response.data);
                                                                alert(`${product.title}\n\nProduct Added`);
                                                                CountItem();
                                                            })
                                                    }}


                                                >Add to Cart</button>
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
            </section >
        </div >
    );
}
