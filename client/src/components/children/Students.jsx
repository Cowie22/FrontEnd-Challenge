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
      let testScores = person.grades.map((grade, i) => {
        return <p className="score">{`Test ${i + 1}: ${grade}%`}</p>
      })
      return (
        <div className="student-container" onClick={() => person.id = person.id > 0 ? person.id - 100 : person.id + 100}>
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
              {parseInt(person.id) < 0 ?
                <div className="test-scores">
                 {testScores}
                </div>
                :
                <div>

                </div>
              }
            </div>
          </div>
              {parseInt(person.id) < 0 ?
            <div className="logo-container">
              <img src="http://pngimg.com/uploads/minus/minus_PNG55.png" className="logo"
              onClick={() => this.props.handleLogoClicked()}
              />
            </div>
            :
            <div className="logo-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizT3fEFOQHdZyw-EdCt3XOVUnbvKsASn036Xr7aK0cnJVIGwq" className="logo"
              onClick={() => this.props.handleLogoClicked()}
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