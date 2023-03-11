import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import App from './App';
import Branding from './pages/Branding';
import Integrations from './pages/Integrations';
import Marketing from './pages/Marketing';
import Measurements from './pages/Measurements';
import Accounts from './pages/Accounts';
import Search from './pages/Search';
import ServiceArea from './pages/ServiceArea';
import Services from './pages/Services';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <h1>404</h1>
  },  
  {
    path: '/branding',
    element: <Branding/>
  },  
  {
    path: '/integrations',
    element: <Integrations/>
  },  
  {
    path: '/marketing',
    element: <Marketing/>
  },  
  {
    path: '/measurements',
    element: <Measurements/>
  },  
  {
    path: '/search',
    element: <Search/>
  },  
  {
    path: '/service-area',
    element: <ServiceArea/>
  },  
  {
    path: '/services',
    element: <Services/>
  },  
  {
    path: '/accounts',
    element: <Accounts/>
  },  
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
