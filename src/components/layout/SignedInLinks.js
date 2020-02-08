import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = ({ profile, signOut }) => {
  return (
    <ul>
      <li>
        <NavLink to='/create' className='new-blog'>
          New Blog
        </NavLink>
      </li>
      <li>
        <NavLink to='/' onClick={signOut} className='logout'>
          Log Out
        </NavLink>
      </li>
      <li className='hidden'>
        {profile.isEmpty ? (
          <span
            className='pink lignten-1'
            style={{ padding: '10px 13px', borderRadius: '50%' }}
          >
            --
          </span>
        ) : (
          <span className='initials pink lignten-1'>{profile.initials}</span>
        )}
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
