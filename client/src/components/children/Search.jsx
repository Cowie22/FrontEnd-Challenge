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
  // Handles change in the search form for student names
  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    })
    if (event.length === 0) {
      this.props.filterStudents(0);
    } else {
      this.props.filterStudents(event.target.value);
    }
    this.props.handleNameCount(event.target.value.length);
  }
  handleTagChange(event) {
    this.setState({
      tags: event.target.value,
    })
    if (event.length === 0) {
      this.props.filterTags(0);
    } else {
      this.props.filterTags(event.target.value);
    }
    this.props.handleTagCount(event.target.value.length);
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