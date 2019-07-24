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
  handleReset() {
    this.setState({
      tagValue: '',
    })
  }
  render() {
    const { tagValue } = this.state;
    return (
      <div className="inner-tag-container">
        <div className="tags-input">
          {'  '}
          <input type="text"
          id={this.props.id}
          value={tagValue}
          onChange={this.handleChange}
          placeholder={'Add A Tag'}
          style={{fontSize: '22px', border: '0px', borderBottom: '1px solid rgba(0,0,0,0.4)'}}
          ></input>
          {/* Click is passed up to app giving the correct value in the array,
          which in turn can be both displayed on the page and filtered by */}
          <button className="btn" onClick={() => {
            this.props.handleAddTag(tagValue, this.props.id);
            this.handleReset();
          }
            }
            >
            NEW TAG
            </button>
        </div>
      </div>
    )
  }
}

export default Tags