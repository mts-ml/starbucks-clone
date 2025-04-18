import { Layout } from './pages/Layout'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Rewards } from './pages/Rewards'
import { GiftCards } from './pages/GiftCards'
import { ErrorPage } from './pages/ErrorPage'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path='/' element={<Home />} />
    <Route path="menu" element={<Menu />} />
    
    <Route path="rewards" element={<Rewards />} />
    <Route path="gift-cards" element={<GiftCards />} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
))


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
