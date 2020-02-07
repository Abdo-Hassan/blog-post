import React from 'react';
import Notifications from './Notifications';
import BlogList from '../blogs/BlogList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const Dashboard = ({ blogs, auth, notifications }) => {
  if (!auth.uid) return <Redirect to='/signin' />;
  return (
    <div className='dashboard container'>
      <div className='row'>
        <div className='col s12 m6'>
          <BlogList blogs={blogs} />
        </div>
        <div className='col s12 m5 offset-m1'>
          <Notifications notifications={notifications} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  blogs: state.firestore.ordered.blogs,
  auth: state.firebase.auth,
  notifications: state.firestore.ordered.notifications
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'blogs',
      orderBy: ['createdAt', 'desc']
    },
    {
      collection: 'notifications',
      limit: 3,
      orderBy: ['time', 'desc']
    }
  ])
)(Dashboard);
