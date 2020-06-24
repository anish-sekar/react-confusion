import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb,
} from "reactstrap";

import { Link } from "react-router-dom";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardTitle>
            <strong>{dish.name}</strong>
          </CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}
function RenderComments({ comments }) {
  if (comments != null) {
    const comments_all = comments.map((comment) => {
      return (
        <li>
          <p>{comment.comment}</p>
          <p>
            --{comment.author} ,{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(Date.parse(comment.date)))}
          </p>
        </li>
      );
    });

    return (
      <div>
        <h4>
          <strong>Comments</strong>
        </h4>
        <ul className="list-unstyled">{comments_all}</ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function DishDetail(props) {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
        </div>

        <div className="row m-1 p-1">
          <div className="col-12 col-md-5  ">
            <RenderDish dish={props.dish}></RenderDish>
          </div>
          <div className="col-12 col-md-5 ">
            <RenderComments comments={props.comments}></RenderComments>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishDetail;
