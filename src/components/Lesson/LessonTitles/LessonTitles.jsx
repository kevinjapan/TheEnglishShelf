import React from 'react'


const LessonTitles = props => {
   return (
      <div className="row col-12 mt-0">
         <h1 className="heading-1 col-12 mb-1">{props.title}</h1>
         <h2 className="heading-2 col-12 mb-5 ml-3 mt-3">{props.tagline}</h2>
      </div>
   )
}


export default LessonTitles