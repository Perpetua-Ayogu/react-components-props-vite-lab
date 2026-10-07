import React from "react";

function Contact({ blog }) {
  return (
    <div id="contact" className="contact">
      <h2>Contact</h2>

      <p>Get in touch!</p>

      <a
        href={blog.links.github}
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      <br />

      <a
        href={blog.links.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
    </div>
  );
}

export default Contact;