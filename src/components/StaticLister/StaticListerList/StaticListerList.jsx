import React, { useState,useEffect } from 'react'
import StaticListerItem from "../StaticListerItem/StaticListerItem"
import ListerListTitles from '../ListerListTitles/ListerListTitles'
import ListerListRow from '../ListerListRow/ListerListRow'



const StaticListerList = props => {
    
   const [current_page_list,setCurrentPageList] = useState([])
   const [open_items,setOpenItems] = useState([])   //  disabled 'open in-situ' features
   const [service] = useState(props.config['l_service'])

   useEffect(() => {
      const { page,items_per_page,list } = props
      const start_at = ((page - 1) * items_per_page)  
      const end_at = (page * items_per_page) - 1
      let paged_list = list.filter((item,index) => index >= start_at && index <= end_at)
      setCurrentPageList(paged_list)
   },[props])

   const orderList = col => {
      props.onChangedOrder(col)
   }

   const closeItem = (target_item) => {
      let modified = open_items.filter(item => item.id !== target_item.id)
      setOpenItems(modified)
   }

   if ((current_page_list !== undefined) && (props.list_meta.cols !== undefined)){

      return (

         <div className="container bg-light">

            {props.is_col_titles 
               ?  <ListerListTitles 
                     list_meta={props.list_meta}
                     orderList={orderList} /> 
               :   null}

            {current_page_list.map((item,index) => (

               <div key={index}>

                  <ListerListRow 
                     service={service} 
                     list_meta={props.list_meta} 
                     item={item} />

                  {/* display list item 'in-situ' - not accessible to front-end */}
                  <div item={item} className="row mt-5 mt-sm-0 m-1 mb-3 border rounded bg-white">
                     <div className="container">
                           <StaticListerItem
                              className="col-12"
                              item={item}
                              can_admin={props.can_admin}
                              list_meta={props.list_meta}
                              is_open={open_items.find(elem => (elem.id === item.id)) !== undefined ? true : false}
                              onCloseItem={closeItem}
                           />
                     </div>
                  </div>
                  
               </div>
            ))}
         </div>
      )
   } else {
      return <div>loading..</div>;
   }
}


export default StaticListerList