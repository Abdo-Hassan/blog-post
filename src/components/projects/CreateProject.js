import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createProject } from '../../store/actions/projectActions';

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  };
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/');
    this.setState({
      title: '',
      content: ''
    });
  };
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className='grey-text text-darken-3'>Create New Project</h5>
          <div className='input-field'>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <div className='input-field'>
            <label htmlFor='content'>Project Content</label>
            <textarea
              className='materialize-textarea'
              id='content'
              onChange={this.handleChange}
              value={this.state.content}
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

const mapDispatchToProps = dispatch => {
  return {
    //function : ()=> dispatch(action)
    createProject: project => dispatch(createProject(project))
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withRouter
)(CreateProject);
