import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <div>
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Nike</button>
                <button>Jaguar</button>
                <button>Adidas</button>
            </div>
            <CartWidget/>
        </nav>
        </div>
    )
}

export default NavBar