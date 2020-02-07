import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = props => {
  return (
    <ul>
      <li>
        <NavLink to='/create' className='new-blog'>
          New Blog
        </NavLink>
      </li>
      <li>
        <NavLink to='/' onClick={props.signOut} className='logout'>
          Log Out
        </NavLink>
      </li>
      <li className='hidden'>
        <span className='initials pink lignten-1'>
          {props.profile.initials}
        </span>
      </li>
    </ul>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    signOut: () => dispatch(signOut())
  };
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
