import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/dashboard';
import Header from './components/Header/header';
import Login from './page/Login';

function App() {
  return (
    
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/header" element={<Header />}/>
          <Route path="/login" element={<Login />}/>

        </Routes>
      </BrowserRouter>

   
  );
}

export default App;
