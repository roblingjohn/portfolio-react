import React, { Component } from "react";
import ProjectItem from "../../components/ProjectItem/ProjectItem";

const projectArray = [
  {
    title: "Title 1",
    deployed: "Deployed 1",
    repo: "Repo 1",
    screenshotURL: "https://www.placecage.com/300/200",
  },
  {
    title: "Title 2",
    deployed: "Deployed 2",
    repo: "Repo 2",
    screenshotURL: "https://www.placecage.com/300/200",
  },
  {
    title: "Title 3",
    deployed: "Deployed 3",
    repo: "Repo 3",
    screenshotURL: "https://www.placecage.com/300/200",
  },
  {
    title: "Title 4",
    deployed: "Deployed 4",
    repo: "Repo 4",
    screenshotURL: "https://www.placecage.com/300/200",
  },
  {
    title: "Title 5",
    deployed: "Deployed 5",
    repo: "Repo 5",
    screenshotURL: "https://www.placecage.com/300/200",
  },
  {
    title: "Title 6",
    deployed: "Deployed 6",
    repo: "Repo 6",
    screenshotURL: "https://www.placecage.com/300/200",
  },
];

class Portfolio extends Component {
  state = {
    projects: { projectArray },
  };

  render() {
    return (
      <article className="container portfolio-container">
        <h1>Portfolio</h1>
        <div className="row">
          <ProjectItem
            title={this.state.projects.projectArray[0].title}
            deployed={this.state.projects.projectArray[0].deployed}
            repo={this.state.projects.projectArray[0].repo}
            screenshotURL={this.state.projects.projectArray[0].screenshotURL}
          />
          <ProjectItem
            title={this.state.projects.projectArray[1].title}
            deployed={this.state.projects.projectArray[1].deployed}
            repo={this.state.projects.projectArray[1].repo}
            screenshotURL={this.state.projects.projectArray[1].screenshotURL}
          />
        </div>
        <div className="row">
        <ProjectItem
            title={this.state.projects.projectArray[2].title}
            deployed={this.state.projects.projectArray[2].deployed}
            repo={this.state.projects.projectArray[2].repo}
            screenshotURL={this.state.projects.projectArray[2].screenshotURL}
          />
          <ProjectItem
            title={this.state.projects.projectArray[3].title}
            deployed={this.state.projects.projectArray[3].deployed}
            repo={this.state.projects.projectArray[3].repo}
            screenshotURL={this.state.projects.projectArray[3].screenshotURL}
          />
        </div>
        <div className="row">
        <ProjectItem
            title={this.state.projects.projectArray[4].title}
            deployed={this.state.projects.projectArray[4].deployed}
            repo={this.state.projects.projectArray[4].repo}
            screenshotURL={this.state.projects.projectArray[4].screenshotURL}
          />
          <ProjectItem
            title={this.state.projects.projectArray[5].title}
            deployed={this.state.projects.projectArray[5].deployed}
            repo={this.state.projects.projectArray[5].repo}
            screenshotURL={this.state.projects.projectArray[5].screenshotURL}
          />
        </div>
      </article>
    );
  }
}

export default Portfolio;
