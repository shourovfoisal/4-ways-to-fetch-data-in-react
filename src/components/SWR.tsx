import useSWR from "swr";
import { Quote } from "../types/Quote";

const fetcher = async (...args) => {
  const response: Response = await fetch(...args);
  const data: Quote = await response.json();
  return data;
}

export const SWR = () => {
  
  const { data, error } = useSWR("https://api.quotable.io/random", fetcher, { suspense: true });

  if(error) {
    return <h1>{error}</h1>
  }

  return (
    <div>{ data.content }</div>
  )
}
