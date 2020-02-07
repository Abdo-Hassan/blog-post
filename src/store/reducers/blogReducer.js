const initState = {
  blogs: [
    { id: 1, title: 'help me find peach', content: 'blah blah blah' },
    { id: 2, title: 'collect all the stars', content: 'blah blah blah' },
    { id: 3, title: 'egg hunt with yoshi', content: 'blah blah blah' }
  ]
};

const blogsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_BLOG':
      console.log('create blog', action.blog);
      return state;
    case 'CREATE_BLOG_ERROR':
      console.log('create blog error', action.err);
      return state;
    default:
      return state;
  }
};

export default blogsReducer;
