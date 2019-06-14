import React from 'react';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tagValue: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
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
          <button onClick={() => this.props.handleAddTag(this.state.tagValue)}>ADD TAG</button>
        </div>
      </div>
    )
  }
}

export default Tags