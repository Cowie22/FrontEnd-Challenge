import React from 'react';
import Tags from './StudentChildren/Tags.jsx';

const Students = (props) => {
  // Filters the data so that the correct information is displayed in the correct spot
  let student = props.filterData.map((person, i) => {
    // Get the average test scores
    let average = person.grades.reduce((a, b) => parseInt(a) + parseInt(b)) / person.grades.length;
    let testScores = person.grades.map((grade, i) => {
      return <p className="score">{`Test ${i + 1}: ${grade}%`}</p>
    })
    // Formats the tags if there is a tag in the particular student object
    let studentTags;
    if (person.tag) {
      studentTags = person.tag.map((tagalong, i) => {
        return <div key={i} className="tagalong">{tagalong}</div>
      });
    }
    return (
      // onClick conditional used on the ID so that if the id is negative, the hidden information will be displayed
      // Otherwise the original information is displayed
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
            // Handles whether or not the hidden information is displayed, conditional here is based on the click function above
            // Where the ID is either negative or positive
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
            // Same condition as above to display either the plus or minus logo
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
              // Same condition to display the tags child or not
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