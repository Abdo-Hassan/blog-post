import React, { Fragment } from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';
const ProjectList = ({ projects }) => {
  console.log(projects);
  return (
    // <div className='project-list section' style={{ paddingBottom: 40 }}>
    //   {projects &&
    //     projects.map(project => {
    //       return (
    //         <Link to={'/project/' + project.id} key={project.id}>
    //           <ProjectSummary project={project} key={project.id} />
    //         </Link>
    //       );
    //     })}
    // </div>
    <Fragment>
      {projects ? (
        <p>yes there is projects</p>
      ) : (
        <p>no there is not projects</p>
      )}
    </Fragment>
  );
};

export default ProjectList;
