export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make a async call to dispatch
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        // project.title | project.content = ...project
        ...project,
        authorFirstName: 'abdo',
        authorLastName: 'hassan',
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
};
