import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  // Handles change in the search form for park names
  handleChange(event) {
    this.setState({
      name: event.target.value,
    })
    this.props.filterStudents(event.target.value);
  }
  render() {
    return (
      <div className="search-form">
        <h2>Search Students</h2>
        <div className="input-container">
          <label>Student Name: </label>
          {'  '}
          <input type="text" id="name" value={this.state.name} onChange={this.handleChange}></input>
        </div>
      </div>
    )
  }
}

export default Search