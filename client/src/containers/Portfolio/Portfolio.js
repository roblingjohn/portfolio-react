import React, { Component } from "react";
import ProjectItem from "../../components/ProjectItem/ProjectItem";
import projectData from "../../assets/portfolioData/portfolioData"

const projectArray = projectData

class Portfolio extends Component {
  state = {
    projects: { projectArray },
  };

  render() {
    return (
      <article className="container portfolio-container">
        <h1>Portfolio</h1>
        <div className="row">
          {projectArray.map((entry) => (
            <ProjectItem
              title={entry.title}
              deployed={entry.deployed}
              repo={entry.repo}
              screenshotURL={entry.screenshotURL}
              description={entry.description}
            />
          ))}
        </div>
      </article>
    );
  }
}

export default Portfolio;
