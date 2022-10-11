import React, { useContext, useEffect } from "react";
import {
  Productkey,
  Countnumber,
  Mpynumber,
  Addtocart,
  Arraynumber,
} from "./CreateContext";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

function Product_detail() {
  const { Key } = useContext(Productkey);
  let { Count, setCount } = useContext(Countnumber);
  let { Mpyproduct, setMpyproduct } = useContext(Mpynumber);
  let { Addcart, setAddcart } = useContext(Addtocart);
  let { Storenumber, setStorenumber } = useContext(Arraynumber);

  function Add_product_to_cart() {
    if (!Addcart.includes(Key)) {
      setStorenumber((Storenumber) => [...Storenumber, Count]);
      setAddcart((Addcart) => [...Addcart, Key]);
    }
    if (Addcart.includes(Key)) {
      const index = Addcart.map((object) => object).indexOf(Key);
      Storenumber[index] += Count;
    }

    Count = 0;
    setCount(Count);
  }

  function Buycount() {
    function incrementCount() {
      Count = Count + 1;
      setCount(Count);
    }

    function decrementCount() {
      if (Count === 0) {
        Count = 0;
      } else {
        Count -= 1;
      }
      setCount(Count);
    }

    return (
      <div className="Buycount" key={Count}>
        <button onClick={decrementCount}>-</button>
        <p>{Count}</p>
        <button onClick={incrementCount}>+</button>
      </div>
    );
  }

  function Multiplycount() {
    Mpyproduct = Count * Key["Price"];
    useEffect(() => {
      setMpyproduct(Mpyproduct);
    });
    return (
      <div key={Mpyproduct} style={{ fontWeight: "900" }}>
        ${Mpyproduct}
      </div>
    );
  }

  function Star() {
    const array = [];

    for (var i = 0; i < Key["Star"]; i++) {
      array.push(<StarIcon key={i} style={{ color: "yellow" }} />);
    }
    return array;
  }

  return (
    <>
      <div className="containerproduct">
        <div className="container_firstrow">
          <div className="product_picture_slideshow">
            <Slide>
              {Key["Picture"].map((item) => {
                return <img src={item} key={Key} alt="" />;
              })}
            </Slide>
          </div>
          <div className="color">
            <p className="Description_product_sound">Sound : {Key["Sound"]}</p>
            <p>Color</p>
            <div className="colors">
              {Key["Color"].map((item) => {
                return (
                  <div
                    key={item}
                    className="color_container"
                    style={{ background: `${item}` }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="container_description_product">
          <div className="container_description_firstrow">
            <div>
              <p className="Description_product_name">{Key["Name"]}</p>
              <p className="Description_product_price">${Key["Price"]}</p>
              <div className="selled_and_star">
                <p className="Description_product_selled">
                  Selled {Key["Selled"]}
                </p>
                <Star className="Description_product_star" />
              </div>
            </div>
            <div className="buycount_buy">
              <Buycount />
              <Multiplycount />
              <div className="buy_and_addtocart">
                <Link to="/Success_buy">
                  <div className="buy">
                    <p>Buy</p>
                  </div>
                </Link>
                <div className="addtocart">
                  <Link to="/Product_page" onClick={Add_product_to_cart}>
                    Add to cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className="Description_product">Description</p>
          <p className="Description_product_description">
            {Key["Description"]}
          </p>
        </div>
      </div>
    </>
  );
}

export default Product_detail;
