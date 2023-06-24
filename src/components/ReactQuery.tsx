
import { 
  QueryClientProvider as Provider, 
  QueryClient as Client 
} from "react-query";

import { RqChildComp } from "./RqChildComp";
import { Suspense } from "react";

export const ReactQuery = () => {
  const client = new Client({
    defaultOptions: {
      queries: {
        suspense: true
      }
    }
  });
  
  return (
    <div>
      <Provider client={client}>
        <Suspense fallback={<h1>Loading data...</h1>}>
          <RqChildComp />
          <RqChildComp />
        </Suspense>
      </Provider>
    </div>
  )
}
