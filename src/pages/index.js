import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';
import './index.scss';

const IndexPage = () => (
  <div className="content container">
    <Header />
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">ZERO GRAVITY</h1>
        <p className="lead">Zero Gravity is the youth volunteer network of Dr. Shrikant Jichkar Foundation.
            It provides the youth of nation a platform to contribute something to the society
            and bring about a change they want to see in the world.
        </p>
      </div>
    </div>
    <Link to="/about-us/">Learn More</Link>
  </div>
);

export default IndexPage;
