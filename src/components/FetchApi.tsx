import { useEffect, useState } from "react"
import { Quote } from "../types/Quote";

export const FetchApi = () => {

  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    const fetchQuote = async () => {
      const response: Response = await fetch("https://api.quotable.io/random");
      const data: Quote = await response.json();
      setQuote(data);
    }
    fetchQuote();
  }, []);

  return (
    <div>
      {quote?.content}
    </div>
  )
}
