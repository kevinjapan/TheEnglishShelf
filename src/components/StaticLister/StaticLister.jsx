import React, { useState,useEffect,useContext } from 'react'
import { AppContext } from '../AppContext/AppContext'
import StaticListerListContainer from "./StaticListerListContainer/StaticListerListContainer"



const StaticLister = props => {
   
   const {lessons_list_meta } = useContext(AppContext)
   const [page,setPage] = useState(1)
   const [items_per_page] = useState(3)
   const [order_by,setOrderBy] = useState("id")
   const [dir,setDir] = useState("asc")
   const [reset,setReset] = useState(0)
   const [is_create_new,setIsCreateNew] = useState(false)

   useEffect(() => {
      props.onChangePage()
      setPage(1)
   },[props.config.l_service,props])

   const handleSelectedItem = item_id => {
      if(props.onSelectedItem) {
         props.onSelectedItem(item_id)
      }
   }

   const openPage = page_num => {
      props.onChangePage()
      setPage(page_num)
   }

   const resetPages = col => {
      setOrderBy(col)
      setDir(dir === "asc" ? "desc" : "asc")
      // call reset on paginator
      setReset(reset + 1)
   }

   const refresh = () => {
      // call reset on paginator
      setReset(reset + 1)
   }

   const toggleCreateNew = () => {
      setIsCreateNew(is_create_new ? false : true)
   }

   return (
      <div className="row">
         <StaticListerListContainer
            list_meta={lessons_list_meta}
            config={props.config}
            page={page} 
            order_by={order_by}
            dir={dir}
            items_per_page={items_per_page} 
            reset={reset}
            onChangedOrder={resetPages}  
            onCreateNew={toggleCreateNew}  
            onDeletedItem={refresh}
            onSelectedItem={handleSelectedItem}
            onSelectPage={openPage}
         />
      </div>
   )
}


export default StaticLister