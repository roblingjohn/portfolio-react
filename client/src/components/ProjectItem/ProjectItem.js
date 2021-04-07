import React from "react";

const ProjectItem = (props) => {
  console.log(props.screenshotURL)
  return (
    <div className="col-sm portfolio-box">
      <h2 className="portfolio-header">{props.title}</h2>
      <p>
        <a href={props.deployed}>Deployed Site</a>
      </p>
      <p>
        <a href={props.repo}>GitHub Repository</a>
      </p>
      <img
        src={require(`../../assets/images/${props.screenshotURL}`)}
        className="portfolio-img"
        alt={props.title}
      />
    </div>
  );
};

export default ProjectItem;
