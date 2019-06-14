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
      tagInput: [],
      tagCount: 0,
    }
    this.filterStudents = this.filterStudents.bind(this);
    this.filterTags = this.filterTags.bind(this);
    this.handleLogoClicked = this.handleLogoClicked.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
  }
  componentDidMount() {
    this.getAPIData();
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
      let name = `${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}`;
      return name.indexOf(
        studentFilter.toLowerCase()) !== -1
    })
    this.setState({
      filterData: filteredStudents,
    })
  }
  filterTags(tagFilter) {
    let filteredTags = this.state.tagInput;
    console.log('filter tags', filteredTags)
    filteredTags = filteredTags.filter((tags) => {
      let tag = tags.toLowerCase();
      return tag.indexOf(
        tagFilter.toLowerCase()) !== -1
    })
    this.setState({
      filterData: filteredTags,
    })
  }
  handleLogoClicked(event) {
    this.setState({
      clicked: !this.state.clicked,
    })
  }
  handleAddTag(event) {
    this.state.tagInput.push(event)
    this.setState({
      tagCount: this.state.tagCount + 1
    })
  }
  render() {
    return (
      <div>
        <div className="search-container">
          <Search
            filterData={this.state.filterData}
            filterStudents={this.filterStudents}
            filterTags={this.filterTags}
          />
        </div>
        <div className="app-container">
          <Students
            data={this.state.data}
            filterData={this.state.filterData}
            clicked={this.state.clicked}
            handleLogoClicked={this.handleLogoClicked}
            handleAddTag={this.handleAddTag}
            tagInput={this.state.tagInput}
          />
        </div>
      </div>
    )
  }
}

export default App