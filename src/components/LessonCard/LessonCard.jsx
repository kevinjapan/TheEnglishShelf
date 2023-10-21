import React from 'react'
import { NavLink } from "react-router-dom"
import truncate from "../uiStringer/uiStringer"



const LessonCard = props => {
 
   let card_width = props.config['l_card_width'] !== undefined 
      ?   props.config['l_card_width'] 
      :   "col-12 col-sm-6 col-md-6 col-lg-4 text-dark"

   return (
      <NavLink to={`/${props.service}/${props.item.slug}`}
         className={`${card_width} p-1 text-decoration-none text-dark`} key={props.item.id}>
         <div className="m-1 lesson_card text-dark py-2">
            <div className="col-12 m-auto mt-3 pb-3 inlineLink">
               {props.list_meta.cols.map(col => (
                  col.list_col === "1" 
                     ?  <div 
                           key={`${col.id}`} 
                           className={`${col.styles} text-left col-12`}
                           >{col.input_type === "date" 
                              ?  null
                              :  truncate(props.item[col.col],240)}
                        </div>
                     :  null
               ))}
            </div>
         </div>
      </NavLink>
   )
}


export default LessonCard