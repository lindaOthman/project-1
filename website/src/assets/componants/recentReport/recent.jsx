import React from "react";

export default function recent(props) {
  return (
    <div className="col-md-3 mt-4 pt-4">
      <div className="card " style={{ width: "18rem" }}>
        <img src="./public/img/b1.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
