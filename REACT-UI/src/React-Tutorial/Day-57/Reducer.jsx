import React, { useReducer } from 'react';

const initialState = {
    amount: 0,         // The amount entered by the user
    convertedAmount: 0, // The result of the conversion
    currencyType: '',   // The selected currency type
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_AMOUNT':
            return { ...state, amount: action.payload };
        case 'SET_CURRENCY':
            return { ...state, currencyType: action.payload };
        case 'CONVERT':
            let convertedAmount = 0;
            switch (state.currencyType) {
                case 'ind':
                    convertedAmount = (state.amount / 80).toFixed(2); // Convert INR to USD
                    break;
                case 'euro':
                    convertedAmount = (state.amount / 0.95).toFixed(2); // Convert EUR to USD
                    break;
                case 'jpy':
                    convertedAmount = (state.amount / 135).toFixed(2); // Convert JPY to USD
                    break;
                default:
                    convertedAmount = 0;
            }
            return { ...state, convertedAmount };
        default:
            return state;
    }
};

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleCurrencyChange = (e) => {
        dispatch({ type: 'SET_CURRENCY', payload: e.target.value });
    };

    const handleAmountChange = (e) => {
        dispatch({ type: 'SET_AMOUNT', payload: e.target.value });
    };

    const handleConvert = () => {
        dispatch({ type: 'CONVERT' });
    };

    return (
        <div>
            <h1>Currency Converter using Reducer</h1>
            <div className="w-[200px] m-2">
                {/* Currency Select */}
                <p className='flex-wrap my-1 w-[300px]'>Select the Currency to Convert</p>
                <select className="my-2 form-control" onChange={handleCurrencyChange}>
                    <option value="" disabled selected>Select Currency</option>
                    <option value="ind">INR (Indian Rupees)</option>
                    <option value="euro">EUR (Euro)</option>
                    <option value="jpy">JPY (Japanese Yen)</option>
                </select>

                {/* Amount Input */}
                <p className='my-1'>Amount in selected currency</p>
                <input
                    className="form-control"
                    type="number"
                    placeholder="Enter amount"
                    onChange={handleAmountChange}
                    value={state.amount}
                />

                {/* Convert Button */}
                <button className="my-2 btn btn-primary" onClick={handleConvert}>Convert</button>

                {/* Display Result */}
                <h3 className='w-[400px]'>
                    Converted Amount: ${state.convertedAmount} USD
                </h3>
            </div>
        </div>
    );
};

export default Reducer;
