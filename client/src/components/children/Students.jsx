import React from 'react';

class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    let student = this.props.filterData.map((person, i) => {
      let average = person.grades.reduce((a, b) => parseInt(a) + parseInt(b)) / person.grades.length;
      return (
        <div className="student-container">
          <img src={person.pic} className="student-pic" />
          <div className="student-info-container">
            <div className="student-name">
              {person.firstName}
              {'  '}
              {person.lastName}
            </div>
            <div className="student-info">
              <div>
                Email: {' '}{person.email}
              </div>
              <div>
                Company: {' '}{person.company}
              </div>
              <div>
                Skills: {' '}{person.skill}
              </div>
              <div>
                Average: {' '}{`${average}%`}
              </div>
            </div>
          </div>
              {this.props.clicked ?
              <div>
                test 1:
              </div>
              :
              <div className="logo-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizT3fEFOQHdZyw-EdCt3XOVUnbvKsASn036Xr7aK0cnJVIGwq" className="logo"
                onClick={() => console.log('hello')}
                />
              </div>
              }
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