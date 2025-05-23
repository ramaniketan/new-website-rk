import Aos from "aos";
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Layouts from './components/layout/header';

import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/app.scss';
const App = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Layouts>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Layouts>
    </>
  )
}

export default App