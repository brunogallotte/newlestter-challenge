import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Sucess from './pages/Sucess'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/sucess',
    element: <Sucess />
  }
])

function App() {
  return (
    <div className="App">
      <>
        <RouterProvider router={rotas} />
      </>
    </div>
  )
}

export default App
