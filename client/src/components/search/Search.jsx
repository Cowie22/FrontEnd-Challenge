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
    // Controls which data array is used in app so that both fields can be filtered at the same time
    // If 0 then the original data array is used, otherwise the filtered data array is used
    this.props.filterStudents(event.target.value);
    this.props.handleNameCount(event.target.value.length);
  }

  handleTagChange(event) {
    this.setState({
      tags: event.target.value,
    })
    this.props.filterTags(event.target.value);
    this.props.handleTagCount(event.target.value.length);
  }
  render() {
    return (
      <div className="search-form">
        <div className="input-container">
          {'  '}
            <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.handleNameChange}
            placeholder={'Search by name'}
            style={{fontSize: '22px', border: '0px', borderBottom: '1px solid rgba(0,0,0,0.4)', width: 820}}
            >
            </input>
        </div>
        <div className="input-container">
          {'  '}
            <input
            type="text"
            id="tags"
            value={this.state.tags}
            onChange={this.handleTagChange}
            placeholder={'Search by tags'}
            style={{fontSize: '22px', border: '0px', borderBottom: '1px solid rgba(0,0,0,0.4)', width: 820}}
            >
          </input>
        </div>
      </div>
    )
  }
}

export default Search