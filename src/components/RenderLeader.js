import React from "react";
import { Media } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
function RenderLeader(props) {
  return (
    <Media className="col-md-10 mt-5">
      <Media left top href="#">
        <Media
          object
          src={baseUrl + props.leader.image}
          alt={props.leader.name}
        />
      </Media>
      <Media body className="ml-5">
        <Media heading>{props.leader.name}</Media>
        {props.leader.designation}
        <br></br>
        <br></br>
        {props.leader.description}
      </Media>
    </Media>
  );
}

export default RenderLeader;
