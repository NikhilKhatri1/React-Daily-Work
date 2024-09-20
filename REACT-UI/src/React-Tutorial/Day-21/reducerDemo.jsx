import React, { useReducer } from 'react';

let intialState = { wishList: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "addToWishList":
            return { wishList: state.wishList + 1 };

        case "removeFromWishList":
            return { wishList: state.wishList - 1 }
    }
    return (
        <div>reducerDemo</div>
    )
}

function ReducerDemo() {

    const [state, dispatch] = useReducer(reducer, intialState);

    function handleWishlistClick() {
        dispatch({ type: 'addToWishList' });
    }
    function handleRemoveWishList() {
        dispatch({ type: 'removeFromWishList' });
    }

    return (
        <div>
            <h3>Shopping</h3>
            <button className='btn btn-warning bi bi-heart' style={{ position: 'fixed', top: '50px', right: '50px' }}>
                <span className='badge bg-danger position-absolute rounded rounded-circle'>{state.wishList} </span>
            </button>
            <div className='card' style={{ width: '270px' }}>
                <img src="iphone1.PNG" className='card-img-top' height="200" />
                <div className="card-header">
                    <div>iPhone Black</div>
                </div>
                <div className="card-footer">
                    <button onClick={handleWishlistClick} className="btn btn-success bi bi-heart">Add</button>
                    <button className="btn btn-warning bi bi-cart4 ms-2"></button>
                    <button onClick={handleRemoveWishList} className="btn btn-danger bi ms-2 bi-trash">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default ReducerDemo