import React from 'react';
import moment from 'moment';
import Loading from '../../loading/Loading';

const Notifications = ({ notifications }) => {
  return (
    <div className='section'>
      <div className='card z-depth-0'>
        <div className='card-content card-content-mobile'>
          <span className='card-title'>Notifications</span>
          {notifications === undefined || notifications.length === 0 ? (
            <Loading />
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
