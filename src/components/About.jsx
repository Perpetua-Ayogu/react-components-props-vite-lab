import React from "react";

// App supplies the profile image and biography; use a placeholder when image is omitted.
// The about ID connects this section to Header's About navigation link.
function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside id="about">
      <img src={image} alt="blog logo" width="200" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
