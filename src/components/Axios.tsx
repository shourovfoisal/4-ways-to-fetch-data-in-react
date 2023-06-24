import axios from "axios";
import { useEffect, useState } from "react";
import { Quote } from "../types/Quote";

export const Axios = () => {

  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await axios.get("https://api.quotable.io/random");
      setQuote(response.data);
    }
    fetchQuote();
  }, []);

  return (
    <div>{quote?.content}</div>
  )
}
