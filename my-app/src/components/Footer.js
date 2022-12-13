import React from 'react';
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
                <FacebookIcon className="mx-3" size={36}/>
                <LinkedinIcon className="mx-3" size={36}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;