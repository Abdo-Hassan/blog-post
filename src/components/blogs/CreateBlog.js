import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createBlog } from '../../store/actions/blogActions';
import { Redirect } from 'react-router-dom';

class CreateBlog extends Component {
  state = {
    title: '',
    content: ''
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.createBlog(this.state);
    this.props.history.push('/');
    this.setState({
      title: '',
      content: ''
    });
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />;
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Create New Blog</h5>
          <div className='input-field'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              onChange={this.handleChange}
              value={this.state.title}
              required
            />
          </div>
          <div className='input-field'>
            <label htmlFor='content'>Blog Content</label>
            <textarea
              className='materialize-textarea'
              id='content'
              onChange={this.handleChange}
              value={this.state.content}
              required
            />
          </div>
          <div className='input-field'>
            <button className='btn pink lighten-1 z-depth-0'>Create</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.firebase.auth
  };
}

const mapDispatchToProps = dispatch => {
  return {
    createBlog: blog => dispatch(createBlog(blog))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(CreateBlog);
