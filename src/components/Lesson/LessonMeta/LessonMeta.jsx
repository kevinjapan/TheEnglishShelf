import React from 'react'


const LessonBlock = props => {

    return (
        <div 
            className="row col-10 col-md-8 col-lg-6 m-3 ml-4 border rounded bg-light p-2" id="worksheet_top">
                <div className="row col-12 mb-2">
                    <div className="col-12 col-sm-4 text-muted">keywords</div>
                    <div className="col-12 col-sm-8">{props.keywords}</div>
                </div>
                {props.duration !== ""
                    ?   <div className="row col-12 mb-2">
                            <div className="col-12 col-sm-4 text-muted">duration</div>
                            <div className="col-12 col-sm-8 ">{props.duration}</div>
                        </div>
                    : null}
                <div className="row col-12 mb-2">
                    <div className="col-12 col-sm-4 text-muted">contributor</div>
                    <div className="col-12 col-sm-8 ">{props.author}</div>
                </div>
        </div>
    )
}


export default LessonBlock