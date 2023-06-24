import { useQuery } from "react-query"
import { getQuote } from "../utils/getQuoteApi";

export const RqChildComp = () => {

  const { data, isLoading } = useQuery("quote", () => getQuote());

  return (
    <div>{ data?.content }</div>
  )
}
