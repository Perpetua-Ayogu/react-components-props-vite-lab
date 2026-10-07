import React from "react";

// App supplies the blog name; navigation links point to the page and section IDs.
// About and ArticleList provide targets; Contact's target exists only when mounted.
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
