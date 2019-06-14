import React from 'react';
import axios from 'axios';
import Students from './children/Students.jsx';
import Search from './children/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filterData: [],
      clicked: false,
    }
    this.filterStudents = this.filterStudents.bind(this);
    this.handleLogoClicked = this.handleLogoClicked.bind(this);
  }
  componentDidMount() {
    this.getAPIData();
    console.log(this.state.filterData)
  }
  getAPIData() {
    axios.get('https://www.hatchways.io/api/assessment/students')
      .then(res => {
        res.data.students.clicked = false;
        this.setState({
          data: res.data.students,
          filterData: res.data.students,
        })
      })
  }
  filterStudents(studentFilter) {
    let filteredStudents = this.state.data;
    filteredStudents = filteredStudents.filter((student) => {
      let parkName = `${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}`;
      return parkName.indexOf(
        studentFilter.toLowerCase()) !== -1
    })
    this.setState({
      filterData: filteredStudents,
    })
  }
  handleLogoClicked(event) {
    this.setState({
      clicked: !this.state.clicked,
    })
  }
  render() {
    return (
      <div>
        <div className="search-container">
          <Search
            filterData={this.state.filterData}
            filterStudents={this.filterStudents}
          />
        </div>
        <div className="app-container">
          <Students
            data={this.state.data}
            filterData={this.state.filterData}
            clicked={this.state.clicked}
            handleLogoClicked={this.handleLogoClicked}
          />
        </div>
      </div>
    )
  }
}

export default App