import logo from "../../assets/grocery.jpg";
import { FaSearch, FaRegUser, FaShoppingCart } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import "./Navbar.css";
import { useState } from "react";
export default function Navbar() {
  const [cartqty, setcartqty] = useState(0);
  return (
    <nav>
      <div className="section-1">
        <img src={logo} alt="logo " className=" logo" />

        <div className="search-bar">
          <input type="text" placeholder=" Search" />
          <button>
            <FaSearch />
          </button>
        </div>

        <div className="user">
          <FaRegUser className />
        </div>
        {/* <div className="cart">
          <FaShoppingCart />
          <span className="qty">{cartqty}</span>
        </div> */}
      </div>
      <div className="section-2">
        <Dropdown>
          <Dropdown.Toggle variant="" id="dropdown-basic">
            Categories
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Fresh Vegetables</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Daily BreakFast</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Pharma and wellness</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Personel Care</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}
