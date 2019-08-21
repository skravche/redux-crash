import React from 'react';
import Post from './components/Post';
import PostForm from './components/PostForm';
import { Provider } from 'react-redux';

import store from './components/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
