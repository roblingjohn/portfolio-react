import React from "react";

const ProjectItem = (props) => {
  return (
    <div className="col-sm portfolio-box">
      <h2 className="portfolio-header">{props.title}</h2>
      <p>
        <a href={props.deployed} target="_blank" rel="noopener noreferrer">
          Deployed Site
        </a>
      </p>
      <p>
        <a href={props.repo} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </p>
      <p>{props.description}</p>
      <a href={props.deployed} target="_blank" rel="noopener noreferrer">
        <img
          src={require(`../../assets/images/${props.screenshotURL}`)}
          className="portfolio-img"
          alt={props.title}
        />
      </a>
    </div>
  );
};

export default ProjectItem;
