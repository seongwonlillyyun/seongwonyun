import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Home_kr from './pages/Home_kr'
import Root from './pages/Root'
function App() {
    const router:any = createBrowserRouter([{
        path:"/",
        element:<Root/>,
        children :[
          {path:'/', element :<Home_kr/>}
        ]
      }])

  return <RouterProvider router={router}/>
}

export default App
