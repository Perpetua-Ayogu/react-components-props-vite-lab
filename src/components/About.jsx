import React from "react";

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside id="about">
      <img src={image} alt="blog logo" width="200" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
