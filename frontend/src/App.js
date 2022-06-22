
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
      {/* <Cards/> */}

      <Routes>
        <Route path='/products' element= {<Cards/>}>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
