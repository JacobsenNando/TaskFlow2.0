import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // Import the BrowserRouter and RouterProvider components from the react-router-dom library
import Home from './routes/Home.jsx' // Import the Home component
import Teste from './routes/Teste.jsx' // Import the Teste component

const BrowserRouter = createBrowserRouter([ // Create a BrowserRouter component using the createBrowserRouter function
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
  },
  {
    path: '/teste',
    element: <Teste />,
  }]}

 ]) 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>,
)
