import React, { Component } from "react";
import portfolioData from "../../assets/portfolioData/portfolioData";

class ProjectPage extends Component {
  state = { projectData: {} };

  portfolioArray = portfolioData;

  projectData = {};

  getData(title) {
    let obj = this.portfolioArray.find((o) => o.searchName === title);
    console.log(obj);
    this.projectData = obj;
    console.log(this.projectData);
    // this.setState({ projectData: this.projectData });
    // console.log(this.state);
  }

  componentDidMount() {
    this.getData(this.props.match.params.title);
    this.setState({ projectData: this.projectData });
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.match.params.title}</h1>
      </div>
    );
  }
}

export default ProjectPage;
