import React from 'react';
import moment from 'moment';

const BlogSummary = ({ blog }) => {
  return (
    <div className='card z-depth-0 blog-summary'>
      <div className='card-content grey-text text-darken-3 card-content-mobile'>
        <span className='card-title card-title-mobile'>{blog.title}</span>
        <p>
          Posted By {blog.authorFirstName} {blog.authorLastName}{' '}
        </p>
        <p className='grey-text'>
          {moment(blog.createdAt.toDate().toString()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default BlogSummary;
