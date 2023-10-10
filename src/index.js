import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Store/index'
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
const Null = () => {
  return null
}

root.render(
  <Provider store={store}>
    <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path={`/:id/details`} element={<Null />} />
      </Routes>
    </React.StrictMode>
    </BrowserRouter>
  </Provider>
);