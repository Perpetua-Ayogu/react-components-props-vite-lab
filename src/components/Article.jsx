
import React from "react";

// ArticleList supplies each post's title, date, and preview; an omitted date uses the default.
function Article({ title, date = "January 1, 1970", preview }) {
  return (
    <article className="article">
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
