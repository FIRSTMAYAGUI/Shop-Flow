import { Search, ShoppingCart, User } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
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

            {/* icons and Login */}
            <div className="flex gap-10 items-center">
                <div className="flex gap-6 items-center">
                    <div>
                        <Search />
                    </div>
                    <Link to={'/'} className="icon-link">
                        <User />
                    </Link>
                    <Link to={'/'} className="icon-link">
                        <ShoppingCart/>
                    </Link>
                </div>

                <button className="login-btn">
                    <Link to={'/'}>Login</Link>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Navbar
