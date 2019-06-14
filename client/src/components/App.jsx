import React from 'react';
import axios from 'axios';
import Students from './children/Students.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    this.getAPIData();
  }
  getAPIData() {
    axios.get('https://www.hatchways.io/api/assessment/students')
      .then(res => {
        console.log(res.data.students)
        this.setState({
          data: res.data.students,
        })
      })
  }
  render() {
    return (
      <div>
        <Students
          data={this.state.data}
        />
      </div>
    )
  }
}

export default App