import { Quote } from "../types/Quote";

export const getQuote = async () => {

    const response: Response = await fetch("https://api.quotable.io/random");
    const data: Quote = await response.json();
    return data;
}