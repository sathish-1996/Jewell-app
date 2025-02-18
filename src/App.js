import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/dashboard';
import Header from './components/Header/header';
import Login from './page/Login';

// import Collections from './pages/Collections/collections';
import 'react-slideshow-image/dist/styles.css'
import Cart from './pages/Cart/cart';
import store  from './store';
import { Provider } from 'react-redux';
import Collections from './pages/Collections/collections';
function App() {
  return (

    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/payment" element={<Cart />} /> */}
          <Route path="/login" element={<Login />} />
        
          {/* <Route path="/collection" element={<Collections />} /> */}

        </Routes>
         </Provider >
    </BrowserRouter>
     
   
  );
}

export default App;
