import React, { useState,useEffect,useContext } from 'react'
import { AppContext } from '../../AppContext/AppContext'
import StaticListerList from "../StaticListerList/StaticListerList"
import StaticListerCards from "../StaticListerCards/StaticListerCards"
import StaticPaginator from "../StaticPaginator/StaticPaginator"


const StaticListerListContainer = props => {

   const {lessons_list} = useContext(AppContext)
   const [filtered_list,setFilteredList] = useState([])
   const [view] = useState(props.config['l_view'] !== undefined ? props.config['l_view'] : "list")

   useEffect(() => {
      if(lessons_list) {
         setFilteredList(lessons_list.filter(block => parseInt(block[props.config.l_filter]) === props.config.l_filter_value))
      }
   },[lessons_list,props.config])


   const { api,config,order_by,dir,reset } = props
   const { page } = props
   
   // fallback page size
   let items_per_page = 18

   if(config['l_items_per_page'] !== undefined) {
      items_per_page = config['l_items_per_page']
   }

   return (
      <>
         {props.config['l_paginate'] === true 
            ?  <StaticPaginator
                  page={page}
                  service={props.service}
                  service_filter={props.service_filter}
                  total_no_rows={filtered_list.length}
                  items_per_page={items_per_page}
                  onSelectPage={props.onSelectPage}
                  reset={reset}
               />
            : null 
         }

         <div style={{width:'96%',marginInline:'auto'}}>
            {view === 'list'
               ?  <StaticListerList
                     api={api}
                     config={config}
                     list_meta={props.list_meta}
                     list={filtered_list}
                     page={page} 
                     items_per_page={items_per_page} 
                     order_by={order_by}
                     dir={dir}
                     reset={reset}
                     onSelectedItemId={props.onSelectedItemId}
                     onItemControls={props.onItemControls}
                     onChangedOrder={props.onChangedOrder}  
                     onCreateNew={props.onCreateNew}
                  />
               :  <StaticListerCards
                     api={api}
                     config={config}
                     list_meta={props.list_meta}
                     list={filtered_list}
                     page={page} 
                     items_per_page={items_per_page} 
                     order_by={order_by}
                     dir={dir}
                     reset={reset}
                     onSelectedItemId={props.onSelectedItemId}
                     onChangedOrder={props.onChangedOrder}  
                     onCreateNew={props.onCreateNew}  
                     onDeletedItem={props.refresh}
                  />
               }
         </div>

         {props.config['l_paginate'] === true 
            ?  <StaticPaginator
                     page={page}
                     service={props.service}
                     service_filter={props.service_filter}
                     total_no_rows={filtered_list.length}
                     items_per_page={items_per_page}
                     onSelectPage={props.onSelectPage}
                     reset={reset}
                  />
            : null 
         }

      </>
   )
}


export default StaticListerListContainer