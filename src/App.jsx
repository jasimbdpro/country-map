import './App.css';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import NoMatch from './NoMatch/NoMatch';
import CountryDetails from './CountryDetails/CountryDetails';

function App() {
  return (
    <HashRouter>
      <Link style={{ display: 'flex', justifyContent: 'center', textDecoration: 'none' }} to='/'>Go Home</Link>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/home' element={<Home></Home>}></Route>
        <Route path='name/:nameCommon' element={<CountryDetails></CountryDetails>}></Route>
        <Route path='*' element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
