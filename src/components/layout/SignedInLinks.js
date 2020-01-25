import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = props => {
  return (
    <ul>
      <li>
        <NavLink to='/create' className='new-project'>
          New Project
        </NavLink>
      </li>
      <li>
        <NavLink to='/' onClick={props.signOut} className='logout'>
          Log Out
        </NavLink>
      </li>
      <li className='hidden'>
        <NavLink to='/' className='btn btn-floating pink lignten-1'>
          {props.profile.initials}
        </NavLink>
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
