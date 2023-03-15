import './App.css';
import Home from './pages/Home';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import CreatePost from './pages/CreatePost';
import Poste from './pages/Poste';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/createpost' element={<CreatePost/>}></Route>
          <Route path='/post/:id' element={<Poste/>}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
