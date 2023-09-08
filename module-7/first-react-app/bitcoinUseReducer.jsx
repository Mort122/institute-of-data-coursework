import { useState, useEffect, useReducer } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

const SET_RATE = 'SET_RATE';
const SET_LOADING = 'SET_LOADING';
const SET_ERROR = 'SET_ERROR';


function reducer(state, action) {
    switch (action.type) {
        case SET_RATE:
            return { ...state, rate: action.payload, loading: false };
        case SET_LOADING:
            return { ...state, loading: true, error: null };
        case SET_ERROR:
            return { ...state, error: action.payload, loading: false };
        default:
            return state;
    }
}

function useBitcoinRate(currency) {
    const initialState = {
        rate: null,
        loading: true,
        error: null,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        dispatch({ type: SET_LOADING });

        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`, { signal })
            .then(response => response.json())
            .then(data => {
                if (data.bitcoin && data.bitcoin[currency.toLowerCase()]) {
                    dispatch({ type: SET_RATE, payload: data.bitcoin[currency.toLowerCase()] });
                } else {
                    throw new Error('Data not available');
                }
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    dispatch({ type: SET_ERROR, payload: err.message });
                }
            });

        return () => controller.abort();
    }, [currency]);

    return state;
}

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const { rate, loading, error } = useBitcoinRate(currency);

    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <div>
                {loading && <p>Loading...</p>}
                {rate && <p>1 BTC = {rate} {currency}</p>}
                {error && <p>Error: {error}</p>}
            </div>
        </div>
    );
}

export default BitcoinRates;
