import React from "react";
import blogData from "./Blog.js";

import Header from "./Header.jsx";
import About from "./About.jsx";
import ArticleList from "./ArticleList.jsx";

// The home page connects Blog.js data to Header, About, and ArticleList.
// Pass only the props each child needs; Contact stays outside the lab's required tree.
function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />

      <About image={blogData.image} about={blogData.about} />

      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
