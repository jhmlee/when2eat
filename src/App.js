import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './home-page/HomePage';
import When2Eat from './when2eat-page/When2Eat';


import './App.css';

function App() {
  return (
    <div className="App">
      <label>this is the home page</label>
      <Router>
       <Routes>
        <Route path='/' element={<HomePage/>}></Route>
         <Route path='/when2eat' element={<When2Eat/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
