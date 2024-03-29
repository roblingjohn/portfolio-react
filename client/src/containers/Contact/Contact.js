import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 contact-box">
          <div className="contact">
            <h1>Contact</h1>
            <ul>
              <li>
                <h4>
                  Email:{" "}
                  <a
                    href="mailto:roblingjohn@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    roblingjohn@gmail.com
                  </a>
                </h4>
              </li>
              <li>
                <h4>
                  <a
                    href="https://github.com/roblingjohn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </h4>
              </li>
              <li>
                <h4>
                  <a
                    href="https://www.linkedin.com/in/john-robling-88679a1a8/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </h4>
              </li>
              <li>
                <h4>
                  <a
                    href="https://drive.google.com/file/d/14-bDnQB8lfA1iArO6PUOhxQsCi05DVZG/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </h4>
              </li>
              <li>
                <h4>Phone: 404.468.8398</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
