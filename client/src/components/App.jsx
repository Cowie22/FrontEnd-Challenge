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
      filter: [],
      nameCount: 0,
      tagFilterCount: 0,
    }
    this.filterStudents = this.filterStudents.bind(this);
    this.filterTags = this.filterTags.bind(this);
    this.handleLogoClicked = this.handleLogoClicked.bind(this);
    this.handleAddTag = this.handleAddTag.bind(this);
    this.handleNameCount = this.handleNameCount.bind(this);
    this.handleTagCount = this.handleTagCount.bind(this);
  }
  componentDidMount() {
    this.getAPIData();
  }
  // Gets data from the API
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
  // Filters for student names, first conditional in the function is dependent on the length of the
  // tags filter and allows both to be filtered at the same time
  filterStudents(studentFilter) {
    let filteredStudents = this.state.tagFilterCount > 0 ? this.state.filterData : this.state.data;
    filteredStudents = filteredStudents.filter((student) => {
      let name = `${student.firstName.toLowerCase()} ${student.lastName.toLowerCase()}`;
      return name.indexOf(
        studentFilter.toLowerCase()) !== -1
    })
    this.setState({
      filterData: filteredStudents,
    })
  }
  // Keeps track of the field length so that both fields can be filtered at the same time
  handleNameCount(event) {
    this.setState({
      nameCount: event
    })
  }
  // Filters for student tags, first conditional in the function is dependent on the length of the
  // names filter and allows both to be filtered at the same time
  filterTags(tagFilter) {
    let filteredTags = this.state.nameCount > 0 ? this.state.filterData : this.state.data;
    filteredTags = filteredTags.filter((tags) => {
      if (tags.tag) {
        let tagalong = tags.tag.join().toLowerCase();
        return tagalong.indexOf(
          tagFilter.toLowerCase()) !== -1
      }
    })
    this.setState({
      filterData: filteredTags,
    })
  }
  // Keeps track of the field length so that both fields can be filtered at the same time
  handleTagCount(event) {
    this.setState({
      tagFilterCount: event
    })
  }
  // Handles whether or not the hidden information is displayed
  handleLogoClicked(event) {
    this.setState({
      clicked: !this.state.clicked,
    })
  }
  // Handles when a new tag is added, if there are no tags then the tags field
  // Is added as an array to the correct object using the object id and the field value
  // Is pushed to the array
  handleAddTag(event) {
    this.state.tagInput.push(event);
    this.state.data.map((student, i) => {
      if (!student.tag) {
        student.tag = [];
      }
      if (i + 1 === student.id) {
        student.tag.push(event);
      }
    })
    // Callback so that the added tag is not one click behind
    this.setState({
      tagCount: this.state.tagCount + 1
    }, () => console.log('data', this.state.data))
  }
  render() {
    return (
      <div>
        <div className="search-container">
          <Search
            filterData={this.state.filterData}
            filterStudents={this.filterStudents}
            filterTags={this.filterTags}
            handleNameCount={this.handleNameCount}
            handleTagCount={this.handleTagCount}
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
            filter={this.state.filter}
          />
        </div>
      </div>
    )
  }
}

export default App