import { useState, useEffect } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function useBitcoinRate(currency) {
    const [rate, setRate] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setLoading(true);
        setError(null);

        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`, { signal })
            .then(response => response.json())
            .then(data => {
                if (data.bitcoin && data.bitcoin[currency.toLowerCase()]) {
                    setRate(data.bitcoin[currency.toLowerCase()]);
                    setLoading(false);
                } else {
                    throw new Error('Data not available');
                }
            })
            .catch(err => {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                    setLoading(false);
                }
            });

        return () => controller.abort();
    },  [currency]);
    return { rate, loading, error };
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