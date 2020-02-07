import React from 'react';
import moment from 'moment';

const Notifications = ({ notifications }) => {
  return (
    <div className='section'>
      <div className='card z-depth-0'>
        <div className='card-content card-content-mobile'>
          <span className='card-title'>Notifications</span>
          {notifications === undefined || notifications.length === 0 ? (
            <span className='card-title' style={{ color: '#E91E63' }}>
              There is No Notifications Yet !
            </span>
          ) : (
            <ul className='notifications'>
              {notifications &&
                notifications.map(item => {
                  return (
                    <li key={item.id}>
                      <span className='pink-text' style={{ marginRight: 7 }}>
                        {item.user}
                      </span>
                      <span>{item.content}</span>
                      <div className='grey-text note-date'>
                        {moment(item.time.toDate()).fromNow()}
                      </div>
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
