import React, { Component } from "react";

const Footer = props => {
  return (
    <footer>
      <p className="footer-links">
       
        <a href="http://prettycoolpattern.com/#/dashboards/contact" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="http://instagram.com/jasonlevien" target="_blank">
          Say Hi on Instagram
        </a>
        <span> / </span>
        <a href="http://prettycoolpattern.com/#/dashboards/projects" target="_blank">
          Read My Blog
        </a>
      </p>
      <p>
        &copy; 2019 <strong>PrettyCoolPattern</strong> - 
      </p>
    </footer>
  );
};

export default Footer;
