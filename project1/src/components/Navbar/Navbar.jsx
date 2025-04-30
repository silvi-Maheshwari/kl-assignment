import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link style={styles.link} to="/">Register</Link>
      <Link style={styles.link} to="/dashboard">Dashboard</Link>
    </nav>
  );
};

const styles = {
  nav: {
    padding: "10px 20px",
    backgroundColor: "#333",
    display: "flex",
    justifyContent: "space-between"
  },
  link: {
    color: "white",
    textDecoration: "none",
    margin: "0 10px"
  }
};

export default Navbar;
