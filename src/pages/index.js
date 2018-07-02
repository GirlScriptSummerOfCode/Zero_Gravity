import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';

const IndexPage = () => (
  <div>
    <Header />
    <p>
      Zero Gravity is the youth volunteer network of Dr. Shrikant Jichkar Foundation.
      It provides the youth of nation a platform to contribute something to the society
      and bring about a change they want to see in the world.
    </p>
    <Link to="/about-us/">Learn More</Link>
  </div>
);

export default IndexPage;
