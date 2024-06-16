import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Hrugved.</div>
      <div>
        <Link to={"https://www.linkedin.com/in/hrugved-lakhapati-963450261/?originalSubdomain=in"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/http.hrugved/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
