import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import GameCards from './pages/game-cards';
import AboutMe from './pages/aboutme';
import SobreMi from './pages/aboutme/sobre-mi';
import 'bulma/css/bulma.min.css';
import packageInfo from '../package.json'

function App() {

  return (
    <div className="App">
    <BrowserRouter 
    basename={getBasename()}
    >
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/game-cards' element={<GameCards/>}/>
        <Route path='/about-me' element={<AboutMe/>}/>
        <Route path='/sobre-mi' element={<SobreMi/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

function getBasename() {
  let array = packageInfo.homepage.split("/");
  return array[array.length-1];
}
export default App;

