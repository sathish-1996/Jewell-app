import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/dashboard';
import Header from './components/Header/header';
import Collections from './pages/Collections/collections';
import 'react-slideshow-image/dist/styles.css'
function App() {
  return (
    
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/header" element={<Header />}/>
          {/* <Route path="/collections" element={<Collections />}/> */}

        </Routes>
      </BrowserRouter>

   
  );
}

export default App;
