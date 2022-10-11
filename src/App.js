import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import Homepage from "./component/homepage";
import Product from "./component/product";
import Detail from "./component/product_detail";
import Cart from "./component/Addtocart";
import Success_buying from "./component/Success_buy";
import {
  Productkey,
  Countnumber,
  Mpynumber,
  Addtocart,
  Arraynumber,
  Productarray,
} from "./component/CreateContext";
import Productjson from "./assets/json/product.json";

function App() {
  const [Key, setKey] = useState({});
  let [Count, setCount] = useState(0);
  let [Mpyproduct, setMpyproduct] = useState(0);
  let [Addcart, setAddcart] = useState([]);
  let [Storenumber, setStorenumber] = useState([]);
  let [Product_array, setProduct_array] = useState([]);
  Object.keys(Productjson).forEach(function(val) {
    Object.keys(Productjson[val]).forEach(function(val1) {
      Product_array.push(Productjson[val][val1]);
    });
  });
  Product_array = Product_array.sort(() => Math.random() - 0.5);

  return (
    <>
      <div className="App">
        <Productarray.Provider value={{ Product_array, setProduct_array }}>
          <Productkey.Provider value={{ Key, setKey }}>
            <Addtocart.Provider value={{ Addcart, setAddcart }}>
              <Countnumber.Provider value={{ Count, setCount }}>
                <Arraynumber.Provider value={{ Storenumber, setStorenumber }}>
                  <Mpynumber.Provider value={{ Mpyproduct, setMpyproduct }}>
                    <Header />
                    <Routes>
                      <Route path="/" element={<Homepage />} />
                      <Route path="/Product_page" element={<Product />} />
                      <Route path="/Product" element={<Detail />} />
                      <Route path="/Cart" element={<Cart />} />
                      <Route path="/Success_buy" element={<Success_buying />} />
                    </Routes>
                    <Footer />
                  </Mpynumber.Provider>
                </Arraynumber.Provider>
              </Countnumber.Provider>
            </Addtocart.Provider>
          </Productkey.Provider>
        </Productarray.Provider>
      </div>
    </>
  );
}

export default App;
