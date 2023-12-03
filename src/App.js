import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Goods from './components/Goods';
import MyBag from './components/MyBag';

function App() {
  return (
    <div className="App">
      <Link to='/'>Goods</Link>
      <Link to='/my-bag'>My Bag</Link>

      <Routes>
        <Route path='/' element={<Goods />} />
        <Route path='/my-bag' element={<MyBag />} />
      </Routes>
    </div>
  );
}

export default App;
