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
    console.log('tags', this.props.tagInput)
    let addedTags = this.props.tagInput.map((tag, i) => {
      return (
        <div key={i}>
          {tag}
        </div>
      )
    })
    return (
      <div>
        <div>
          {addedTags}
        </div>
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