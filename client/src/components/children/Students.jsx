import React from 'react';

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    let student = this.props.data.map((person, i) => {
      let average = person.grades.reduce((a, b) => parseInt(a) + parseInt(b)) / person.grades.length;
      return (
        <div>
          <img src={person.pic} className="student-pic" />
          <div className="student-name">
            {person.firstName}
            {'  '}
            {person.lastName}
          </div>
          <div className="student-info">
            {person.email}
            {person.company}
            {person.skill}
            {`${average}%`}
          </div>
        </div>
      )
    })
    return(
      <div>
        {student}
      </div>
    )
  }
}

export default Students