import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { FakestoreHome } from "./fakestore-home"
import { FakestoreProducts } from "./fakestore-products"
import { FakestoreDetails } from "./fakestore-details"
import { FakestoreLogin } from "./fakestore-login"
import { FakestoreError } from "./fakestore-error"

export function FakestoreIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="bg-dark text-white text-center p-1">
                    <h2>Fakestore</h2>
                </header>
                <section className="mt-3">
                    <Routes>
                        <Route path='/' element={<FakestoreHome />} />
                        <Route path='products/:category' element={<FakestoreProducts />}>
                            <Route path='details/:id' element={<FakestoreDetails />} />
                        </Route>
                        <Route path="login" element={<FakestoreLogin />} />
                        <Route path="error" element={<FakestoreError/>} />
                        <Route path="*" element={<h2 className="text-danger">Not Found</h2>} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}