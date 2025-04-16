import { Layout } from './pages/Layout'
import { Home } from './pages/Home'
import { ErrorPage } from './pages/ErrorPage'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path='/' element={<Home />} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
))


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
