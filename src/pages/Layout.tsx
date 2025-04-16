import { Header } from "../components/Header"
import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"


export const Layout: React.FC = () => {
   return (
      <>
         <Header />

         <Outlet />

         <Footer />
      </>
   )
}
