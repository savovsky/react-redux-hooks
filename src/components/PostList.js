import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.state);
    return (
      <div>PostList component</div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    state: state
  }
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
