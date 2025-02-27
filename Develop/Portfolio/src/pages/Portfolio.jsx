import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <ul>
        <li>
          <a href="https://github.com/cbroomew/SQL-employee-tracker" target="_blank" rel="noopener noreferrer">
            SQL Employee Tracker
          </a>
        </li>
        <li>
          <a href="https://github.com/cbroomew/README-Generator" target="_blank" rel="noopener noreferrer">
            README Generator
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;