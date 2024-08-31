import { useFetch } from "./useFetch";

export function FetchinApi() {

    const { products } = useFetch();

    return (
        <div className="p-4 m-4 container-fluid">
            <h1>Fetching Title</h1>
            {
                products.map((product) =>
                    <h3 key={product.id}>Title: {product.title}</h3>
                )
            }
        </div>
    )
}