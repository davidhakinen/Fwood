import React, { Component } from "react";
import EmailIcon from "@mui/icons-material/Email";
import { Icon } from "@iconify/react";

class Footer extends Component {
  render() {
    return (
      <>
        <div className="footercontainer">
          <div className="footer">
            <div className="footer_Fwood">
              <p>Fwood</p>
            </div>
            <div className="contect">
              <p>Contect with</p>
              <EmailIcon
                className="footer_icon_margin"
                sx={{ fontSize: "30px" }}
              />
              <Icon
                className="footer_icon_margin"
                icon="akar-icons:instagram-fill"
                style={{ fontSize: "30px" }}
              />
              <Icon
                className="footer_icon_margin"
                icon="akar-icons:twitter-fill"
                style={{ fontSize: "30px" }}
              />
            </div>
          </div>
          <div className="copyright">
            <p>Created by David Hakinen. © 2022</p>
          </div>
        </div>
      </>
    );
  }
}
export default Footer;
