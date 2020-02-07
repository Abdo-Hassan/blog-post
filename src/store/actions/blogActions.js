export const createBlog = blog => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make a async call to dispatch
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('blogs')
      .add({
        // blog.title | blog.content = ...blog
        ...blog,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_BLOG', blog });
      })
      .catch(err => {
        dispatch({ type: 'CREATE_BLOG_ERROR', err });
      });
  };
};
