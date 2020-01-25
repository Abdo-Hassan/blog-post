import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ project }) => {
  return (
    <div className='card z-depth-0 project-summary'>
      <div className='card-content grey-text text-darken-3 card-content-mobile'>
        <span className='card-title card-title-mobile'>{project.title}</span>
        <p>
          Posted By {project.authorFirstName} {project.authorLastName}{' '}
        </p>
        <p className='grey-text'>
          {moment(project.createdAt.toDate().toString()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ProjectSummary;
