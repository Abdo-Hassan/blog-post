export const createProject = project => {
  return (dispatch, getState) => {
    // make a async call to dispatch
    dispatch({ type: 'CREATE_PROJECT', project });
  };
};
