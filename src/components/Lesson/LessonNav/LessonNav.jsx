import React from 'react'


const LessonNav = props => {

    return (
        <div className="col-12 text-right m-1 mb-0" style={{display:'flex',justifyContent:'flex-end'}}>
            <div className="cta_link" 
                onClick={props.back2List}>back to list</div>
        </div>
    )
}


export default LessonNav