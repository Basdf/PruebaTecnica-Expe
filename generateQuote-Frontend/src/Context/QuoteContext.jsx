import Axios from 'axios';
import React, { useMemo, useState } from 'react';


const QuoteContext = React.createContext(null);

export function QuoteProvider(props) {
    const [quote, setQuote] = useState(null);

    async function createQuote() {
        let response = await Axios.post(`http://localhost:8080/api/v1/generate-changing-life-quote/`)
            .catch((error) => {
                console.error(error);
            });
        setQuote(response)
    }
    async function searchQuote(id) {
        console.log(id)
        let response = await Axios.get(`http://localhost:8080/api/v1/generate-changing-life-quote/${id}`)
            .catch((error) => {
                console.error(error);
            });
        setQuote(response)
    }
    async function deleteQuote(id) {
        let response = await Axios.delete(`http://localhost:8080/api/v1/generate-changing-life-quote/${id}`)
            .catch((error) => {
                console.error(error);
            });
        setQuote(response)
    }
    const value = useMemo(() => {
        return ({
            quote,
            createQuote,
            searchQuote,
            deleteQuote
        })

    }, [quote])

    return <QuoteContext.Provider value={value} {...props} />
}

export function useQuote() {
    const context = React.useContext(QuoteContext)
    if (!context) {
        throw new Error("algo paso :V")
    }
    return context
}