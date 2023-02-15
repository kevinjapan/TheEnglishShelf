import React from 'react'

const NotFound = props => 
   <div className="ui_tools">
      <div className="m-5 bg-white border rounded p-3">Sorry, the {props.resource_type} you requested was not found.</div>
   </div>

export default NotFound;
