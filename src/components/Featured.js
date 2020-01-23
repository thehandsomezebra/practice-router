import React from "react";

const Featured = ({ match }) => {
  // let fname = match.params.fname;
  // let lname = match.params.lname;
  let name = match.params.name;
  let topic = match.params.topic;
  return (
    <div className="main-content">
      <h2>
        {/* Featured: {fname} {lname} */}
        Featured: {name}
      </h2>
      <p>
        Introducing <strong>{name}</strong>, a teacher who loves teaching
        courses about <strong>{topic}</strong>!
      </p>
    </div>
  );
};

export default Featured;
