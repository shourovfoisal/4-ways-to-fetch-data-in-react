import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FetchApi } from './components/FetchApi.tsx';
import { Axios } from './components/Axios.tsx';
import { SWR } from './components/SWR.tsx';
import { ReactQuery } from './components/ReactQuery.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <hr />
      <Routes>
        <Route path='/fetch-api' element={ <FetchApi /> } />
        <Route path='/axios' element={ <Axios /> } />
        <Route path='/swr' element={ <Suspense fallback={<h1>Loading data...</h1>}><SWR /></Suspense> } />
        <Route path='/react-query' element={ <ReactQuery /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
