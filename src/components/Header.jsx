import React from "react";

function Header({ name }) {
  return (
    <header className="header">
      <h1>{name}</h1>

      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#articles">Articles</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;