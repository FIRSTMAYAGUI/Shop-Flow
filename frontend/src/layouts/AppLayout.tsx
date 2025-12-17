import Navbar from "../components/Navbar"

const AppLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}

export default AppLayout
