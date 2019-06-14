import React from 'react';
import Tags from './StudentChildren/Tags.jsx';

const Students = (props) => {
  let student = props.filterData.map((person, i) => {
    let average = person.grades.reduce((a, b) => parseInt(a) + parseInt(b)) / person.grades.length;
    let testScores = person.grades.map((grade, i) => {
      return <p className="score">{`Test ${i + 1}: ${grade}%`}</p>
    })
    let studentTags;
    if (person.tag) {
      studentTags = person.tag.map((tagalong, i) => {
        return <div key={i} className="tagalong">{tagalong}</div>
      });
    }
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
               <br></br>
               <div className="tags-section">
               Tags:
               <div className="new-tag">
                {studentTags}
               </div>
               </div>
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
            onClick={() => props.handleLogoClicked()}
            />
          </div>
          :
          <div className="logo-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRizT3fEFOQHdZyw-EdCt3XOVUnbvKsASn036Xr7aK0cnJVIGwq" className="logo"
            onClick={() => props.handleLogoClicked()}
            />
          </div>
            }
            <div className="hidden-info">
              {parseInt(person.id) < 0 ?
              <div className="tags-container">
                <Tags
                  handleAddTag={props.handleAddTag}
                  tagInput={props.tagInput}
                />
              </div>
              :
              <div>

              </div>
              }
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


export default Students