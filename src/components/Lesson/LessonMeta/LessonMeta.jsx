import React from 'react'


const LessonBlock = props => {

   return (
      <div className="row col-8 col-md-8 col-lg-6 m-3 ml-4 mb-5 border rounded shadow-sm mx-auto mx-lg-0 bg-light p-1 pb-0" id="worksheet_top">
         <div className="row col-12 mb-2">
            <div className="col-12 col-md-3 text-muted">keywords</div>
            <div className="col-12 col-md-9">{props.keywords}</div>
         </div>
         {props.duration !== ""
            ?   <div className="row col-12 mb-2">
                     <div className="col-12 col-md-3 text-muted">duration</div>
                     <div className="col-12 col-md-9 ">{props.duration}</div>
               </div>
            : null}
         {/* <div className="row col-12 mb-2">
            <div className="col-12 col-md-4 text-muted">contributor</div>
            <div className="col-12 col-md-8 ">{props.author}</div>
         </div> */}
      </div>
   )
}


export default LessonBlock