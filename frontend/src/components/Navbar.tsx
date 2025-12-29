import { Menu ,Search, ShoppingCart, User } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="w-full text-4xl bg-[url(./assets/woman-shop.jpg)] bg-cover bg-left h-screen relative before:absolute before:bg-[#a3a3d14f] before:w-full before:h-full">
        <div className="navbar">
            
            {/* Logo */}
            <Link to={'/'} className="logo">FlowShop</Link>

            {/* nav links */}
            <nav className="nav-link">
                <Link to={'/'} >Home</Link>
                <Link to={'/product'}>Products</Link>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Contact</Link>
            </nav>

            {/* icons */}
            <div className="flex gap-10 items-center ">
                <div className="xl:flex gap-6 items-center hidden">
                    <button className="cursor-pointer">
                        <Search className="icon"/>
                    </button>
                    <Link to={'/'} className="icon">
                        <User />
                    </Link>
                    <Link to={'/'} className="icon">
                        <ShoppingCart/>
                    </Link>
                </div>

                {/* Login and menu */}
                <div className="flex sm:w-48 md:w-fit sm:justify-between gap-6">
                    <button className="login-btn">
                        <Link to={'/'}>Login</Link>
                    </button>
                    <button className="xl:hidden cursor-pointer">
                        <Menu size={'45px'} className="icon"/>
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
