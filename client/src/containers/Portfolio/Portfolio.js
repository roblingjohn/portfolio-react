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
    title: "Cat Nicknames",
    deployed: "https://cat-nicknames-jr.herokuapp.com/",
    repo: "https://github.com/roblingjohn/cat-nicknames",
    screenshotURL: "../../../../assets/images/cat-nicknames.png",
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
          {projectArray.map((entry) => (
            <ProjectItem
              title={entry.title}
              deployed={entry.deployed}
              repo={entry.repo}
              screenshotURL={entry.screenshotURL}
            />
          ))}
        </div>
      </article>
    );
  }
}

export default Portfolio;
