import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";

function Success_buying() {
  return (
    <div className="Success_buying_container">
      <div>
        <div className="Shipping_Icon">
          <LocalShippingIcon />
        </div>
        <div className="text">
          <p>Thank you for buying Fwood guitar.</p>
          <p>The shipping of your guitar will be arrive 1 - 2 weeks.</p>
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Success_buying;
