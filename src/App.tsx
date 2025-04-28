import { Layout } from './pages/Layout'
import { Home } from './pages/Home'
import { MenuLayout } from './pages/Menu/MenuLayout'
import { Menu } from './pages/Menu/Menu'
import { Previous } from './pages/Menu/Previous'
import { Favorites } from './pages/Menu/Favorites'
import { Rewards } from './pages/Rewards'
import { GiftCards } from './pages/GiftCards'
import { ErrorPage } from './pages/ErrorPage'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path='/' element={<Home />} />
    <Route path="menu" element={<MenuLayout />} >
      <Route index element={<Menu />} />
      <Route path="previous" element={<Previous />} />
      <Route path="favorites" element={<Favorites />} />

    </Route>

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
