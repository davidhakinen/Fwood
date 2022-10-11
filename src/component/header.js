import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Productarray } from "./CreateContext";

function Header() {
  let array = [];
  const { Product_array } = useContext(Productarray);
  const [Input_data, setInput_data] = useState("");

  for (var i = 0; i < Product_array.length; i++) {
    array.push({ value: Product_array[i]["Name"] });
  }

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

            <div>
              <input
                type="text"
                placeholder="Search"
                onChange={(event) => {
                  setInput_data(event.target.value);
                }}
              />
              {Product_array.filter((val) => {
                if (val === "") {
                  console.log(val.length);
                  return val;
                } else if (
                  val.Name.toLowerCase().includes(Input_data.toLowerCase())
                ) {
                  console.log(val.length);
                  return val;
                }
              }).map((val, key) => {
                return (
                  <div key={key}>
                    <p>{val.Name}</p>
                  </div>
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
