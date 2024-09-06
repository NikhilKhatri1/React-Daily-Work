import { useReducer } from "react";

let initialState = { wishList: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "addToWhishList":
            return { wishList: state.wishList + 1 };
        case "removeFromWhishList":
            return { wishList: state.wishList - 1 };
    }
}

export function ReducerDemo() {

    const [state, dispatch] = useReducer(reducer, initialState);

    function handleWishListClick() {
        dispatch({ type: 'addToWhishList' });
    }
    function handleRemoveWhishList() {
        dispatch({ type: 'removeFromWhishList' });
    }

    return (
        <div>
            <h3>Shopping</h3>
            <button className="btn btn-warning bi bi-heart" style={{ position: 'fixed', top: '50px', right: '50px' }}>
                <span className="badge bg-danger position-absolute rounded rounded-circle"> {state.wishList}</span>
            </button>
            <div className="card" style={{ width: '250px' }}>
                <img src="iphone1.PNG" className="card-img-top" height="200" />
                <div className="card-header">
                    <div>iPhone 14 (Black) 128 GB</div>
                </div>
                <div className="card-footer">
                    <button onClick={handleWishListClick} className="btn btn-success bi bi-heart"></button>
                    <button className="btn btn-warning bi bi-cart4 ms-2"></button>
                    <button onClick={handleRemoveWhishList} className="btn btn-danger bi ms-2 bi-trash">Whishlist</button>
                </div>
            </div>
        </div>
    )
}