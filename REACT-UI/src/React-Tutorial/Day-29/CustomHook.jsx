import useFetch from "./useFetch"

const CustomHook = () => {
    const [data] = useFetch("https://fakestoreapi.com/products/categories")
    return (
        <div>
            <ul>
                {
                    data && data.map((item, index) => <li key={index}>{item}</li>)
                }
            </ul>
        </div>
    )
}

export default CustomHook