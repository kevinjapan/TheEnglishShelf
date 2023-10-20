import React, { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Lesson from '../Lesson/Lesson'



const StaticLessonContainer = () => {

   const [lesson,setLesson] = useState({})
   let { url } = useParams();
   let navigate = useNavigate();

   useEffect(() => {

      const fetchSiteTextBlocks = async (url) => {
         
         let jsonDataSet = null
         try {
            const response = await fetch(`/lessons/${url}.json`)
            jsonDataSet = await response.json()
         }
         catch (error) {
            // we report all errors for lesson retrieval on UI as 'lesson not found'
            // also catches any non-json returned - eg 200 OK when resource missing
            navigate('/notfound');
         }
         if(jsonDataSet !== null) {
            setLesson(jsonDataSet.lesson)
         }
      }
      fetchSiteTextBlocks(url)

   },[url,navigate])


   return (
      lesson.title
         ?   <Lesson lesson={lesson} />
         :   <div className="lesson_loading"></div>
   )
}


export default StaticLessonContainer