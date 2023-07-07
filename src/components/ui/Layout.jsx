import { Link } from "wouter"

const Layout = () => {
    return (
        <header className="bg-black text-white p-2">
            <div className="min-w-0 flex flex-row justify-between">
                <Link to="/detalle">
                    <a className="p-2">K-ace <span className="bg-yellow-500 text-black p-2 rounded-sm">Shop</span></a>
                </Link>
                <nav className="">
                    <ul className="flex">
                        <li className="p-2 mr-2 hover:text-black hover:bg-yellow-500 hover:rounded-sm">
                            <Link to="/" className="p-2">
                                Crear Producto
                            </Link>
                        </li>
                        <li className="p-2 mr-2 hover:text-black hover:bg-yellow-500 hover:rounded-sm">
                            <Link to="/detalle" className="p-2">
                                Ver productos
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Layout