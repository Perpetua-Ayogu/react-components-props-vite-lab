import React from "react";

// Optional links section: a parent must pass Blog.js data as the blog prop.
// App currently leaves this component unmounted, so Header's Contact link has no target.
function Contact({ blog }) {
  return (
    <div id="contact" className="contact">
      <h2>Contact</h2>

      <p>Get in touch!</p>

      {/* Open the supplied profile links in new tabs without sending a referrer. */}
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
