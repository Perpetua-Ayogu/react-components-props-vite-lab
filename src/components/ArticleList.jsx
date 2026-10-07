import React from "react";
import Article from "./Article.jsx";

// App supplies posts; create one Article per post and pass its display fields individually.
// Stable post IDs let React identify each article when the list changes.
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
