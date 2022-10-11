import React, { useContext } from "react";
import { Addtocart, Arraynumber } from "./CreateContext";
import StarIcon from "@mui/icons-material/Star";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Link } from "react-router-dom";

function Cart() {
  let { Addcart } = useContext(Addtocart);
  let { Storenumber, setStorenumber } = useContext(Arraynumber);

  function Increment(item) {
    setStorenumber((prevState) => {
      prevState[item] += 1;
      return [...prevState];
    });
  }

  function Decrement(item) {
    if (Storenumber[item] === 0) {
      setStorenumber((prevState) => {
        prevState[item] = 0;
        return [...prevState];
      });
    } else {
      setStorenumber((prevState) => {
        prevState[item] -= 1;
        return [...prevState];
      });
    }
  }

  function Buying() {
    const array = [];
    let Total = 0;

    for (var i = 0; i < Addcart.length; i++) {
      let number = Addcart[i]["Price"] * Storenumber[i];
      array.push(number);
      Total += number;
    }

    return (
      <>
        <div className="the_container">
          {Addcart.map((item, index) => {
            if (Storenumber[index] !== 0) {
              return (
                <div className="Productname_quantity_and_price" key={index}>
                  <div className="Productname_and_quantity">
                    <p className="Productname">{item["Name"]}</p>
                    <p className="quantity">&emsp; x{Storenumber[index]}</p>
                  </div>
                  <div className="Count_price">${array[index]}</div>
                </div>
              );
            }
          })}
        </div>
        <hr />
        <div className="Total">
          <p>Total price :</p>
          <p>${Total}</p>
        </div>
      </>
    );
  }

  function Star(Item) {
    const array = [];
    for (var i = 0; i < Item["item"]["Star"]; i++) {
      array.push(<StarIcon key={i} style={{ color: "yellow" }} />);
    }
    return array;
  }

  function checkCart() {
    if (Addcart.length === 0) {
      return (
        <div className="Empty_cart">
          <SentimentVeryDissatisfiedIcon />
          <p>Your cart is still empty</p>
          <p>
            Click
            <Link to="/Product_page"> here </Link>
            to find product
          </p>
        </div>
      );
    } else {
      return (
        <>
          <div className="Fill_cart">
            <div className="Left_container">
              {Addcart.map((item, index) => {
                return (
                  <div key={index} className="container">
                    <div className="firstrow">
                      <img src={item["Picture"]} alt="" />
                      <div className="text">
                        <p className="Name">{item["Name"]}</p>
                        <p className="Price">${item["Price"]}</p>
                        <Star
                          item={item}
                          className="Description_product_star"
                        />
                      </div>
                    </div>
                    <div className="secondrow">
                      <button
                        onClick={function() {
                          Decrement(index);
                        }}
                      >
                        -
                      </button>
                      <p>{Storenumber[index]}</p>
                      <button
                        onClick={function() {
                          Increment(index);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="Rcontainer">
              <div className="Right_container">
                <div className="container">
                  <p className="buying">Buying</p>
                  <hr />
                  {Buying()}
                </div>
              </div>
              <div className="cancel_and_buy">
                <Link to="/Product_page">
                  <div className="cancel">Cancel</div>
                </Link>
                <Link to="/Success_buy">
                  <div className="Buy">Buy</div>
                </Link>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  return <div key={Addcart}>{checkCart()}</div>;
}

export default Cart;
