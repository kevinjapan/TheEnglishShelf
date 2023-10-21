import React, { useState,useEffect } from 'react'
import PaginatorNav from './PaginatorNav/PaginatorNav'



const StaticPaginator = props => {

   const [page,setPage] = useState(props.page)
   const [total_pages,setTotalPages] = useState(Math.ceil(props.total_no_rows / props.items_per_page))
   const [page_links,setPageLinks] = useState([{id:1,page:1}])

   useEffect(() => {

      const pages = Math.ceil(props.total_no_rows / props.items_per_page)
      setTotalPages(pages)
      let temp_page_links = []
      let page_num = 1
      for (let i = 0; i < pages; i++) {
         temp_page_links[i] = JSON.parse('{"id":' + page_num + ',"page":' + page_num + "}")
         page_num++
      }
      setPageLinks(temp_page_links)
      setPage(props.page)

   },[props.page,props.total_no_rows,props.items_per_page,props.reset])
   

   const handleChange = (event) => {
      goPage(event.target.value);
   }

   const goPage = (page) => {
      page = parseInt(page)
      if(isNaN(page)) page = 1
      if((page > 0) && (page <= total_pages)){
         setPage(page)
         props.onSelectPage(page)
      }
   }

   return (
      <React.Fragment>
         {total_pages > 0
            ?  <div className="row col-12 ml-1 ml-sm-0 mt-3 mb-3">

                  <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start mb-2 text-center text-sm-left text-muted">
                     page {page} of {total_pages}</div>

                  <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end">
                        <PaginatorNav 
                           page={page} 
                           total_pages={total_pages} 
                           page_links={page_links} 
                           onHandleChange={handleChange} 
                           onGoPage={goPage}
                        />
                  </div>

               </div>
            :   null
         }
      </React.Fragment>
   )
}

export default StaticPaginator