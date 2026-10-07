import React from "react";
import Article from "./Article.jsx";

function ArticleList({ posts }) {
  return (
    <main id="articles" className="article-list">
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
