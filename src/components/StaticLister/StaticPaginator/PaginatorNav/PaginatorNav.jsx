import React from 'react'



const PaginatorNav = props => {

   const all_btns = "btn btn-sm "

   return (
      <React.Fragment>

         {props.page > 1
               ?  <React.Fragment>
                     <div className={all_btns + "btn-outline-primary"} 
                     onClick={() => props.onGoPage(1)}
                     >&lt;&lt;</div>
                     <div className={all_btns + "btn-outline-primary"} 
                     onClick={() => props.onGoPage(parseInt(props.page) - 1)}
                     >&lt;</div>
                  </React.Fragment> 
               :  <React.Fragment>
                     <div className={all_btns + "btn-outline-info disabled text-muted"}
                     >&lt;&lt;</div>
                     <div className={all_btns + "btn-outline-info disabled text-muted"}
                     >&lt;</div>
                  </React.Fragment>
         }

         <select className="btn btn-outline-primary btn-sm inlineLink" 
               onChange={props.onHandleChange} value={props.page}> {
                  props.page_links.map(link => (
                  <option key={link.id} value={link.page}>{link.page}</option>
                  ))}
         </select>

         {props.page < props.total_pages
            ?  <React.Fragment>
                  <div className={all_btns + "btn-outline-primary"} 
                  onClick={() => props.onGoPage(parseInt(props.page) + 1)}
                  >&gt;</div>
                  <div className={all_btns + "btn-outline-primary"} 
                  onClick={() => props.onGoPage(props.total_pages)}
                  >&gt;&gt;</div>
               </React.Fragment>
            : <React.Fragment>
                  <div className={all_btns + "btn-outline-info disabled text-muted"} 
                  >&gt;</div>
                  <div className={all_btns + "btn-outline-info disabled text-muted"}
                  >&gt;&gt;</div>
               </React.Fragment> 
         }

      </React.Fragment>        
   )
}



export default PaginatorNav