import React from "react";

const About = () => {
  return (
    <article className="container">
      <div className="row">
        <div className="col-sm">
          <h1>About</h1>
          <hr />
          <p>
            <img
              className="image-thumbnail float-left article-img"
              src={require("../../assets/images/engagement.jpg")}
              alt="John Robling"
            />
            Hi, I'm John! I'm a graduate of the Georgia Tech Full Stack Web
            Development program. I previously worked in the film industry, but
            decided I needed a change, and so far Web Development seems like an
            exciting new path.
          </p>
          <p>
            I'm a native of the Atlanta area, having lived in Georgia my entire
            life. I got my undergrad from the University of Georgia, which gave
            me mixed feelings about attending Georgia Tech.
          </p>
          <p>
            In my free time, I play clarinet in the Seed and Feed Marching
            Abominable, a local street band based in Little Five Points. I also
            collect LEGOs, and have amassed a quite extensive and expensive
            collection since I started collecting again in 2015. I use them to
            make my LEGO-based web comic,{" "}
            <a
              href="http://brixiety.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brixiety
            </a>
            , for which I built the website myself, which is available in my
            portfolio.
          </p>
        </div>
      </div>
    </article>
  );
};

export default About;
