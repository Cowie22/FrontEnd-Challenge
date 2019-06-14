import React from 'react';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  // Handles changes in the tag field
  handleChange(event) {
    this.setState({
      tagValue: event.target.value,
    })
  }
  render() {
    return (
      <div className="inner-tag-container">
        <div className="tags-input">
          <label>Insert Tags: </label>
          {'  '}
          <input type="text" id="tagValue" value={this.state.tagValue} onChange={this.handleChange}></input>
          {/* Click is passed up to app giving the correct value in the array,
          which in turn can be both displayed on the page and filtered by */}
          <button className="btn" onClick={() => this.props.handleAddTag(this.state.tagValue)}>ADD TAG</button>
        </div>
      </div>
    )
  }
}

export default Tags