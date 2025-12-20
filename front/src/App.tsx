import {BrowserRouter, Routes, Route} from "react-router-dom"
import '../src/css/reset.css'
import '../src/css/style.css'
import '../src/App.css'
import '../src/index.css'
import Home_kr from './pages/Home_kr'

function App() {
  return(
     <BrowserRouter basename="/seongwonyun">
      <Routes>
        <Route path='/' element={<Home_kr/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
