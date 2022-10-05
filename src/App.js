import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/gameQuiz';
import GameIndCards from './pages/gameTarjetas'
import Info from './pages/info';
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
        <Route path='/gameQuiz' element={<Game/>}/>
        <Route path='/gameCards' element={<GameIndCards/>}/>
        <Route path='/info' element={<Info/>}/>
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

