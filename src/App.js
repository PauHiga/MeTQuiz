import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import AboutMe from './pages/aboutme';
import SobreMi from './pages/aboutme/sobre-mi';
import 'bulma/css/bulma.min.css';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/about-me' element={<AboutMe/>}/>
        <Route path='/sobre-mi' element={<SobreMi/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;

