import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tags: '',
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
  }
  // Handles change in the search form for park names
  handleNameChange(event) {
    this.setState({
      name: event.target.value,
      tags: '',
    })
    this.props.filterStudents(event.target.value);
  }
  handleTagChange(event) {
    this.setState({
      name: '',
      tags: event.target.value,
    })
    this.props.filterTags(event.target.value);
  }
  render() {
    return (
      <div className="search-form">
        <h2>Search Students</h2>
        <div className="input-container">
          <label>Student Name: </label>
          {'  '}
          <input type="text" id="name" value={this.state.name} onChange={this.handleNameChange}></input>
        </div>
        <div className="input-container">
          <label>Student Tags: </label>
          {'  '}
          <input type="text" id="tags" value={this.state.tags} onChange={this.handleTagChange}></input>
        </div>
      </div>
    )
  }
}

export default Search