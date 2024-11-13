import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <h5>Written By: <i>Jake Russell F. Macaraeg</i> - {year}</h5>
    </footer>
  );
};

export default Footer;
