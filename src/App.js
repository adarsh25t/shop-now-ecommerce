import React, { Fragment } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <Fragment>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/contact' element={<Contact/>}/>
              </Route>
          </Routes>
        </BrowserRouter>
    </Fragment>
  );
}

export default App;