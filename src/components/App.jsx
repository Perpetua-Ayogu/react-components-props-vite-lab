import React from "react";
import blogData from "./Blog.js";

import Header from "./Header.jsx";
import About from "./About.jsx";
import ArticleList from "./ArticleList.jsx";

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
