import React from 'react';
import '../App.css';

export const EducationCard = ({ qualification, institute, year, logo }) => {
  return (
    <div className="education-card">
      <div className="education-logo">
        <img src={logo} alt={institute} />
      </div>
      <div className="education-content">
        <h3>{qualification}</h3>
        <p>{institute}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};
