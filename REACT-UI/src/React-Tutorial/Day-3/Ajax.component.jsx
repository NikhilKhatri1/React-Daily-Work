import { useEffect, useState } from "react";
import $ from "jquery";
export function Ajax() {
    const [product, setproduct] = useState({ title: '', price: 0, rating: { rate: 0, ratings: 0, reviews: 0 }, offers: [], image: '' });
    function LoadData() {
        $.ajax({
            method: "get",
            url: "product.json",
            success: (response) => {
                setproduct(response);
            },
            error: (ex) => {
                console.log(ex);
            }
        })
    }
    useEffect(() => {
        LoadData();
    })
    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-4">
                    <img src={product.image} alt="image" />
                </div>
                <div className="col-8">
                    <h1>{product.title}</h1>
                    <div className="mt-3">
                        <span className="badge bg-success">{product.rating.rate} <span className="bi bi-star-fill text-warning"></span> </span>
                        <span className="fw-semibold text-secondary ms-3">{product.rating.ratings.toLocaleString()} Ratings &</span>
                        <span className="fw-semibold text-secondary"> {product.rating.reviews.toLocaleString()} Reviews</span>
                    </div>
                    <h4 className="mt-3 text-secondary">{product.price.toLocaleString("en-in", { style: "currency", currency: "INR" })}</h4>
                    <div className="mt-3">
                        <ul className="list-unstyled">
                            {product.offers.map((offer) => {
                                return <li className="bi bi-tag-fill text-success my-3" key={offer}> <span className="text-secondary">{offer}</span></li>
                            }
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
