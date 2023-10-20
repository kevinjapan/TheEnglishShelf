import React, { useState,useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../AppContext/AppContext'
import  { get_lesson_type_titles } from '../../LessonTypes/LessonTypes'



const LessonNav = props => {

   const {lessons_list} = useContext(AppContext)
   const [filtered_list,setFilteredList] = useState([])
   let navigate = useNavigate();

   useEffect(() => {
      if(lessons_list) {
         setFilteredList(lessons_list.filter(block => parseInt(block.type) === parseInt(props.lesson_type)))
      }
   },[lessons_list,props.lesson_type])

   const prev_lesson = () => {
      if(filtered_list.length > 0) {
         let current_index = filtered_list.findIndex((block) => parseInt(block.id) === parseInt(props.current_lesson_id))
         if(current_index < 1) return null
         let prev_lesson = filtered_list[current_index - 1]
         return <div className="cursor_pointer" onClick={() => go_to_lesson(prev_lesson.type,prev_lesson.slug)}>&lt;&nbsp;{prev_lesson.title}</div>
      }
   }

   const next_lesson = () => {
      if(filtered_list.length > 0) {
         let current_index = filtered_list.findIndex((block) => parseInt(block.id) === parseInt(props.current_lesson_id))
         if(current_index >= filtered_list.length - 1) return null
         let next_lesson = filtered_list[current_index + 1]
         return <div className="cursor_pointer" onClick={() => go_to_lesson(next_lesson.type,next_lesson.slug)}>{next_lesson.title}&nbsp;&gt;</div>
      }      
   }

   const go_to_lesson = (lesson_type,lesson_slug) => {
      console.log(lesson_type)
      let lessons_domain = get_lesson_type_titles(parseInt(lesson_type))
      console.log(lessons_domain.slug)
      navigate(`/${lessons_domain.slug}/${lesson_slug}`)
      let target = document.getElementById('top')
      if(target !== null) target.scrollIntoView()
   }

   return (
      <div className="col-12 text-right m-1 mt-4 mb-4" style={{display:'flex',justifyContent:'flex-end'}}>

         <div className="col-12 d-flex justify-content-between px-0" >
            <div className="page_nav_link">{prev_lesson()}</div><div className="page_nav_link">{next_lesson()}</div>
         </div>

      </div>
   )
}


export default LessonNav