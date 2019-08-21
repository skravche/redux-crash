import React, { Component } from 'react';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    fetch('http://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(post),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label>Body:</label>
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Push Me</button>
        </form>
      </div>
    );
  }
}
export default PostForm;
