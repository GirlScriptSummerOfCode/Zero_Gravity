import React from 'react';
import './Header.scss';

const Header = () => (
  <div className="header">
    <header>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="navbar-brand">
              {/* <img src={zero_gravity_logo} className="header_logo" alt="logo" /> */}
              <a className="logo_title" href="#home">Zero_Gravity</a>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">

            <ul className="nav navbar-nav navbar-right">
              <li><a href="#team">Team</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
);

export default Header;
