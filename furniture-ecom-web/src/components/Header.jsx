export default function Header() {
    return (
        <header>
            <div className="mainBar">
                <h1>PineWood.</h1>
                <div className="searchBar">
                    <img src="./icons/search.png" alt="" />
                    <input type="text" placeholder="Search products here ..."/>
                </div>
                
                <div className="icons">
                    <ul>
                        <li>
                            <img src="./icons/alert.png" alt="alert" />
                        </li>
                        <li>
                            <img src="./icons/person.png" alt="person circle" />
                        </li>
                        <li>
                            <img src="./icons/cart.png" alt="cart" />
                        </li>
                        <li>
                            <span>EN</span>
                            {/* <img src="./icons/dropdown.png" alt="dropdown" /> */}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navBar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Room sets</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div>
                    <i class="fa-solid fa-phone-volume"></i>
                    <span>1900 89 89 89</span>
                </div>
            </div>
        </header>
    )
}