import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts;
  }

  render() {
    return <div>Post List</div>;
  }
}
const mapToStateProps = () => {};

export default connect(mapToStateProps, { fetchPosts })(PostList);
