import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";


export function FakestoreProducts()
{
    let params = useParams();
    let navigate = useNavigate();

    const [products, setProducts] = useState([{id:0, title:'', image:'', price:0, description:'', category:'', rating:{rate:0, count:0}}]);
    const [cookies, setCookie, removeCookie] = useCookies(['userid']);

    useEffect(()=>{
         if(cookies['userid']){
            axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
            .then(response=>{
                setProducts(response.data);
            })
         } else {
            navigate('/login');
         }
    },[])

    return(
        <div>
            <h3 className="d-flex justify-content-between"> <span>Products</span> <span>{cookies['userid']}</span> </h3>
            <div className="row">
                <div className="col-4">
                        <div className="d-flex flex-wrap">
                        {
                            products.map(product=>
                                <div className="card p-2 m-2" style={{width:'100px'}}>
                                    <img src={product.image} height="100" className="card-img-top" />
                                    <div className="card-header">
                                        <Link to={`details/${product.id}`} className="btn btn-warning"> View </Link>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <Link to="/">Back to Home</Link>
                    </div>
                    </div>
                <div className="col-8">
                        <Outlet />
                </div>  
            </div>
        </div>
    )
}