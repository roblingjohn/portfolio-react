import React from "react";
import { Link } from "react-router-dom";

const MainSquare = (props) => {
  return (
    <div className="container">
      <div className="row">
        <article className="col-md main-square">
          <Link to={props.route}>
            <h1 className="main-box-entry">{props.text}</h1>
          </Link>
        </article>
      </div>
    </div>
  );
};

export default MainSquare;
