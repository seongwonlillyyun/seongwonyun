import {BrowserRouter, Routes, Route} from "react-router-dom"
import '../src/css/reset.css'
import '../src/css/style.css'
import '../src/App.css'
import '../src/index.css'
import Home_kr from './pages/Home'
import ProjectDetail from "./pages/ProjectDetail"

function App() {
  return(
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home_kr/>}/>
        <Route path='/projects/:slug' element={<ProjectDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
