import React, { Component } from "react";
import ProjectItem from "../../components/ProjectItem/ProjectItem";

const projectArray = [
  {
    title: "Linguick",
    deployed: "https://linguick.herokuapp.com/",
    repo: "https://github.com/roblingjohn/Linguick",
    screenshotURL: "../../../../assets/images/linguick_ss.png",
  },
  {
    title: "Done n' Dusted",
    deployed: "https://fathomless-sands-26873.herokuapp.com/",
    repo: "https://github.com/roblingjohn/grocr-receipt-app",
    screenshotURL: "../../../../assets/images/grocr_ss.png",
  },
  {
    title: "BrüHub",
    deployed: "https://jmh129.github.io/BruHub/",
    repo: "https://github.com/roblingjohn/BruHub",
    screenshotURL: "../../../../assets/images/bruhub_ss.png",
  },
  {
    title: "Google Books Search",
    deployed: "https://tranquil-eyrie-73993.herokuapp.com/saved",
    repo: "https://github.com/roblingjohn/gt-21-google_books_search",
    screenshotURL: "../../../../assets/images/books_ss.png",
  },
  {
    title: "Employee Directory",
    deployed: "https://roblingjohn.github.io/gt-19-employee_directory/",
    repo: "https://github.com/roblingjohn/gt-19-employee_directory",
    screenshotURL: "../../../../assets/images/employee_ss.png",
  },

  {
    title: "Note Taker",
    deployed: "https://sheltered-springs-82717.herokuapp.com/",
    repo: "https://github.com/roblingjohn/gt-homework-11-note_taker",
    screenshotURL: "../../../../assets/images/notes_ss.png",
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
