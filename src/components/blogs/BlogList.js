import React, { Fragment } from 'react';
import BlogSummary from './BlogSummary';
import { Link } from 'react-router-dom';
const BlogList = ({ blogs }) => {
  return (
    <Fragment>
      {blogs === undefined || blogs.length === 0 ? (
        <p>no </p>
      ) : (
        <div className='blog-list section' style={{ paddingBottom: 40 }}>
          {blogs &&
            blogs.map(blog => {
              return (
                <Fragment key={Math.random() * 1000}>
                  <Link to={'/blog/' + blog.id} key={blog.id}>
                    <BlogSummary blog={blog} key={blog.id} />
                  </Link>
                </Fragment>
              );
            })}
        </div>
      )}
    </Fragment>
  );
};

export default BlogList;
