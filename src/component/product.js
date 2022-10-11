import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Productkey, Productarray } from "./CreateContext";

function Productpage() {
  const { setKey } = useContext(Productkey);
  let { Product_array } = useContext(Productarray);

  const handleclick = (item) => {
    setKey(item);
  };

  const Item = ({ item, handleclick }) => {
    return (
      <Link
        onClick={() => handleclick(item)}
        to="/Product"
        handleclick={handleclick}
      >
        <div className="product_container">
          <div className="product_img_container">
            <img src={item.Picture} alt="Product_picture" />
          </div>
          <div className="product_description_container">
            <p className="product_name">{item.Name}</p>
            <p>${item.Price}</p>
            <p className="product_selled">Sold {item.Selled}</p>
          </div>
        </div>
      </Link>
    );
  };
  return (
    <>
      <div className="product">
        {Product_array.map((item) => {
          return <Item key={item.Name} item={item} handleclick={handleclick} />;
        })}
      </div>
    </>
  );
}

export default Productpage;
// kepikiran useeffect diberi nilai awal null connect dengan link to dapatkan nilainya simpan diuseeffect
// context provider ada yang namanya value, divalue dapat simpan item dan context dapat mempas ke yang mau saja
// buat fungsi dengan masukan item kemudian export
