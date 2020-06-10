import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
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
  renderComments(dish) {
    if (dish != null) {
      const comments = dish.comments.map((comment) => {
        return (
          <li>
            <p>{comment.comment}</p>
            <p>
              --{comment.author} , {comment.date}
            </p>
          </li>
        );
      });

      return (
        <div>
          <h4>
            <strong>Comments</strong>
          </h4>
          <ul className="list-unstyled">{comments}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="row m-1 p-1">
        <div className="col-12 col-md-5  ">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-5 ">
          {this.renderComments(this.props.selectedDish)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
