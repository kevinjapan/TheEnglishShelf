import React from 'react'
import  { get_lesson_type_titles } from '../../LessonTypes/LessonTypes'


const StaticLessonPlansTitles = props => {

   const titles = get_lesson_type_titles(props.filter_value)

   return (
      <>
         <div className="d-none d-md-block jumbotron bg-white mb-n4">
            <div className="col-sm-10 col-md-12 col-lg-12 mt-n5">
            <div className="display-5 logo_tag mt-2 mb-n5">{titles.tagline}</div>
            </div>
         </div>
         <div className="col-12 d-md-none bg-white mb-n4 p-2 pb-4">
            <div className="display-5">{titles.title}</div>
            <div className="display-6 logo_tag mb-3">{titles.tagline}</div>
         </div>
      </>
   )
}


export default StaticLessonPlansTitles