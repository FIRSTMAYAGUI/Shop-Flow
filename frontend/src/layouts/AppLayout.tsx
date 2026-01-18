
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const AppLayout = () => {
  return (
    <>
      <header className="relative h-25 w-full">
        <Navbar color="text-default-black" borderColor="border-default-black"/>
      </header>
      
      <main>
        <Outlet/>
      </main>

      <Footer/>
    </>
  )
}

export default AppLayout
