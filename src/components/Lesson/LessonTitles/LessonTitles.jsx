import React from 'react'
import displayTitle from '../../uiArticles/uiArticles'


const LessonTitles = props => {
    return (
        <div className="row col-12">
            <div className="col-12 mb-1">{displayTitle(props.title)}</div>
            <div className="col-12 display-6 text-left ">{props.tagline}</div>
        </div>
    )
}


export default LessonTitles