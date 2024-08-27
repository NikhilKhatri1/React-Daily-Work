import React, { useState, useEffect } from "react";

import axios from "axios"

export function Axios() {
    const [product, setproduct] = useState({ title: '', price: 0, rating: { rate: 0, ratings: 0, reviews: 0 }, offers: [], image: '' });
    function LoadData() {
        axios.get("product.json").then(response => {
            setproduct(response.data);
        })
    }
    useEffect(() => {
        LoadData();
    }, [])
    return (
        <div className="container-fluid">
            <div className="row mt-4 p-4">
                <div className="col-4">
                    <img src={product.image} alt="prodct" />
                </div>
                <div className="col-8">
                    <h2>{product.title}</h2>
                    <div className="mt-3 text-align-center d-flex">
                        <div className="badge bg-success rounded me-3">
                            {product.rating.rate} <span className="bi bi-star-fill"></span>
                        </div>
                        <div className="fw-bold text-secondary">
                            <span>{product.rating.ratings.toLocaleString()} Ratings</span>
                            <span> & </span>
                            <span>{product.rating.reviews.toLocaleString()} Reviews</span>
                        </div>
                    </div>
                    <h4 className="mt-3">{product.price.toLocaleString('en-in', { style: 'currency', currency: 'INR' })}</h4>
                    <div className="mt-3">
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer =>
                                    <li className="bi bi-tag-fill text-success my-3" key={offer}>
                                        &nbsp;<span className="text-secondary">{offer}</span>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}