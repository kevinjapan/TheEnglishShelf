import React, { useState,useEffect } from 'react'
import LessonNav from './LessonNav/LessonNav'
import LessonTitles from './LessonTitles/LessonTitles'
import LessonMeta from './LessonMeta/LessonMeta'
import LessonWorkSheet from './LessonWorkSheet/LessonWorkSheet'
import LessonBlock from './LessonBlock/LessonBlock'



const Lesson = props => {

   const [open_worksheet,setOpenWorksheet] = useState(false)

   useEffect(() => {
      let target = document.getElementById('top')
      if(target !== null) target.scrollIntoView()
   },[])

   const toggleWorkSheet = () => {
      openWorkSheet()
      let target = document.getElementById('worksheet_top')
      if(target !== null) target.scrollIntoView()
   }

   const openWorkSheet = () => {
      setOpenWorksheet(!open_worksheet)
   }
   
   const { title,tagline,keywords,duration,content,author,worksheet_title,worksheet_path,image_path } = props.lesson

   return (
      props.lesson.title
         ?  <div className="lesson col-11 col-md-10 mx-auto my-5 rounded bg-white shadow pb-3">

               <LessonNav 
                  current_lesson_id={props.lesson.id}
                  lesson_type={props.lesson.type} />

               <LessonTitles 
                  title={title} 
                  tagline={tagline} />
                           

               <section className="d-lg-flex col-12 p-0">

                  <div className={worksheet_title !== " " && image_path !== "" ? 'col-12 col-lg-6' : 'col-12'}>
                     {content !== undefined 
                        ? content.map((block,index) => {
                           return <LessonBlock key={index} block={block} />
                        })
                        : null
                     }
                  </div>
                  {(worksheet_title !== " " && image_path !== "")
                     ?  <div className="col-12 col-lg-6 mb-5">
                           <LessonWorkSheet 
                              image_path={image_path} 
                              worksheet_path={worksheet_path} 
                              toggleWorkSheet={toggleWorkSheet} />                               
                        </div>
                     : null 
                  }
               </section>

               <LessonMeta 
                  keywords={keywords} 
                  duration={duration}
                  contributor={author} />

               <LessonNav 
                  current_lesson_id={props.lesson.id}
                  lesson_type={props.lesson.type} />

            </div>
         :   null
   )
}


export default Lesson