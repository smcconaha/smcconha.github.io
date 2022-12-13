import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
            <FacebookShareButton
                    url={"https://plant-people-1b6bf.web.app/"}
                    quote={"Full-stack developer"}
                    hashtag="#developer"
                  >
                    <FacebookIcon className="mx-3" size={36}/>
                  </FacebookShareButton>
                  <TwitterShareButton
                    url={"https://plant-people-1b6bf.web.app/"}
                    quote={"Full-stack developer"}
                    hashtag="#developer"
                  >
                    <TwitterIcon className="mx-3" size={36}/>
                  </TwitterShareButton>
                  <RedditShareButton
                    url={"https://plant-people-1b6bf.web.app/"}
                    quote={"Full-stack developer"}
                    hashtag="#developer"
                  >
                    <RedditIcon className="mx-3" size={36}/>
                  </RedditShareButton>
                  <LinkedinShareButton
                    url={"https://plant-people-1b6bf.web.app/"}
                    quote={"Full-stack developer"}
                    hashtag="#developer"
                  >
                    <LinkedinIcon className="mx-3" size={36}/>
                  </LinkedinShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;