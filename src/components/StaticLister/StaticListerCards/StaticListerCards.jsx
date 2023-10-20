import React, { useState,useEffect } from 'react'
import LessonCard from '../../LessonCard/LessonCard'



const StaticListerCards = props => {

   const [current_page_list,setCurrentPageList] = useState([])
   const [service,setService] = useState(props.config['l_service'])
   
   useEffect(() => {
      const { page,items_per_page,list } = props
      const startat = ((page - 1) * items_per_page)  
      const endat = (page * items_per_page) - 1
      let paged_list = list.filter((item,index) => index >= startat && index <= endat)
      setCurrentPageList(paged_list)
   },[props])

   useEffect(() => {
      setService(props.config.l_service)
   },[props.config.l_service])

   return (
      <div className="col-12 bg-white">
         <div className="row">                
            {props.list_meta !== undefined
               ?  current_page_list.map((item,index) => (
                     <LessonCard 
                        key={index}
                        list_meta={props.list_meta} 
                        service={service} 
                        config={props.config}
                        item={item} />
                  ))
               : null
            }
         </div>
      </div>
   )
}


export default StaticListerCards