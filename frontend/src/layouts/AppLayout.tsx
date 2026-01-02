// import { Outlet } from "react-router-dom"
// import Header from "../components/Header"
import Navbar from "../components/Navbar"

const AppLayout = ({children}: {children?: React.ReactNode}) => {
  return (
    <>
      <header>
        <Navbar color="text-default-black" borderColor="border-default-black"/>
      </header>
      
      <main>
        {children}
      </main>
    </>
  )
}

export default AppLayout
