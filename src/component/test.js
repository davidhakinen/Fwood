{
}
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Productarray } from "./CreateContext";

function Header() {
  const { Product_array } = useContext(Productarray);

  return (
    <nav className="navbar">
      <div className="Fwood">
        <Link to="/">
          <p>Fwood</p>
        </Link>
      </div>

      <ul className="navbar_list">
        <li className="navbar_list_item">
          <Link to="/">Home</Link>
        </li>

        <li className="navbar_list_item">
          <Link to="/Product_page">
            <div>Products</div>
            <ExpandMoreIcon fontSize="large" />
          </Link>
        </li>

        <li className="navbar_list_item">About</li>
      </ul>

      <div className="search">
        <ul className="navbar_list">
          <li className="navbar_list_item">
            <Link to="/Cart">
              <ShoppingCartIcon fontSize="large" />
            </Link>

            <input
              className="searchbar"
              type="text"
              placeholder="Search"
            ></input>
            <div className="searchproduct">
              {Product_array.map((item) => {
                return (
                  <Link to="">
                    <div className="searchproductcontainer">
                      <div>{item["Name"]}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <SearchIcon fontSize="large" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
