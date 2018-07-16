import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/Header';

const AboutPage = () => (
  <div className="content container">
    <Header />
    <h1>About Page</h1>
    <p>This page describes what we do and more about Zero Gravity, our mission and objectives</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
);

export default AboutPage;
