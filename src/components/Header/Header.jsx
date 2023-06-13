import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import "./Header.scss";

import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
const Header = () => {

    const navigate = useNavigate();

    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const { cartCount } = useContext(Context);

    const handleScroll = () => {
        const offset = window.scrollY
        if(offset > 100) {
            setScrolled(true);
        }else {
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, []);
    return (
        <>
            <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate(`/`)}>Home</li>
                        <li>About</li>
                        <li>
                            <span>Categories</span>
                            <ul>
                                <li>
                                    <p onClick={() => navigate(`/category/1`)}>Headphones</p>
                                </li>
                                <li>
                                    <p onClick={() => navigate(`/category/2`)}>WirelessEarbuds</p>
                                </li>
                                <li>
                                    <p onClick={() => navigate(`/category/3`)}>BluetoothSpeaker</p>
                                </li>
                                <li>
                                    <p onClick={() => navigate(`/category/4`)}>SmartWatches</p>
                                </li>

                            </ul>
                        </li>
                    </ul>
                    <div className="center" onClick={() => navigate(`/`)} >QUANGANHSTORE</div>
                    <div className="right">
                        <TbSearch onClick={() => setShowSearch(true)} />
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={() => showSearch ? setShowSearch(false) :  setShowCart(true)}>
                            <CgShoppingCart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {showCart && <Cart setShowCart={setShowCart} />}
            {showSearch && <Search setShowSearch={setShowSearch} />}
        </>
    );
};

export default Header;
