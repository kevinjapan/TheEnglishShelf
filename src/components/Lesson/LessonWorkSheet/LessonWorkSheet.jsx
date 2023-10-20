import React from 'react'
import getImgSrcOrBlank from '../../uiImages/uiImages'


const LessonWorkSheet = props => {

   const buildDownload = worksheet_path => (
      <a href= {`${worksheet_path}`} target="_blank" rel="noopener noreferrer" download
         className="cta_link shadow-sm">download worksheet</a>
   )

   return (
      <div className="lesson_worksheet_wrap">
         <div className="lesson_worksheet row">
            <img 
               className="lesson_img col-12 border rounded shadow-sm" 
               src={getImgSrcOrBlank(props.image_path)} 
               alt="worksheet" />
         </div>
         <div style={{display:'flex',justifyContent:'center',gap:'1rem',marginTop:'2rem'}}>
            {props.worksheet_path !== ""
               ?   buildDownload(props.worksheet_path)
               :   null
            }
         </div>
      </div>
   )
}


export default LessonWorkSheet