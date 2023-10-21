import React from 'react'
import { NavLink } from "react-router-dom"



const NavBarToggler = props => {

   return (
      <div className="bg-primary">
         <div className="d-flex align-items-center col-12 py-2 ">
            <NavLink 
               to="/"
               className="d-block d-sm-none col-8 display-6 text-white text-no-wrap text-decoration-none"
               onClick={props.onMenuItemClicked}>
               The English Shelf
               </NavLink>
            <NavLink 
               to="/"
               className="d-none d-sm-block d-md-none col-8 display-5 text-white text-no-wrap text-decoration-none"
               onClick={props.onMenuItemClicked}>
               The English Shelf
               </NavLink>
            <NavLink 
               to="/terms"
               className="font-weight-light col-2 col-sm-2 ml-auto text-white text-center"  
               onClick={props.onMenuItemClicked}>Terms</NavLink>
            <button 
               className="col-1 btn btn-primary btn-sm float-right" id="toggler"
               onClick={props.onToggleNavBar}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false" role="img">
               <title>Menu</title><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" 
               d="M4 7h22M4 15h22M4 23h22"/></svg>
            </button>
         </div>          
      </div>
    )
}


export default NavBarToggler