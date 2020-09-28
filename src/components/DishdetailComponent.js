import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  BreadcrumbItem,
  Breadcrumb,
  Button,
  Dropdown,
  Input,
  DropdownItem,
  DropdownMenu,
  DropdownOpen,
  DropdownToggle,
  Row,
  Col,
} from "reactstrap";

import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

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
function RenderComments({ comments, addComment, dishId }) {
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
        <CommentForm dishId={dishId} addComment={addComment} />
      </div>
    );
  } else {
    return <div></div>;
  }
}
class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { isModalOpen: false };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  handleSubmit(values) {
    this.props.addComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    return (
      <>
        <Button
          type="button"
          className="btn btn-light"
          onClick={this.toggleModal}
        >
          <i className="fa fa-pencil-alt"></i> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>
                  Rating
                </Label>
                <Col md={12}>
                  <Control.select
                    model=".rating"
                    id="rating"
                    name="rating"
                    placeholder="Rating"
                    className="form-control"
                    validators={{
                      required,
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="author" md={12}>
                  Your Name
                </Label>
                <Col md={12}>
                  <Control.text
                    model=".author"
                    id="author"
                    name="author"
                    placeholder="Your name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                  ></Control.text>
                  <Errors
                    className="text-danger"
                    model=".author"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>
                  Comment
                </Label>
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    rows={6}
                    name="comment"
                    placeholder="comment"
                    className="form-control"
                  ></Control.textarea>
                </Col>
              </Row>
              <Button type="submit" value="Submit" className="bg-primary">
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

function DishDetail(props) {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else {
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
              <RenderComments
                comments={props.comments}
                addComment={props.addComment}
                dishId={props.dish.id}
              ></RenderComments>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
