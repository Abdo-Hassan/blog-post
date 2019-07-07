import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            quaerat dignissimos rem voluptas provident fuga dolores omnis cumque
            iusto, recusandae sequi corporis esse culpa nam? Delectus quasi
            debitis voluptatum possimus.
          </p>
        </div>
        <div className='card-action grey lighten-4 grey-text'>
          <div>Posted By : Abdo Hassan</div>
          <div>2nd july , 3PM</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
