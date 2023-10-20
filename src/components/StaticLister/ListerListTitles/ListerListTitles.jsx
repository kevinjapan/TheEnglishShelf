import React from 'react'



const ListerListTitles = props => {
   return (
      <div className="row d-none d-sm-block col-12 mb-2">
         {props.list_meta.cols.map((col,index) => (
         col.list_col === "1" 
            ?   <div key={index} 
                  className={`${col.styles} inlineLink text-left font-weight-bold`}
                  onClick={() => props.orderList(col.col)}
                  >{col.col}</div> 
            :   null
         ))}
      </div>
   )
}


export default ListerListTitles