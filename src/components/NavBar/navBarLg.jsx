import React from 'react'
import NavBarLinker from "./navBarLinker"


// NavBar for md/lg screen sizes (bootstrap breakpoints)

const NavBarLg = () => {

   // const menuItemClicked = () => {}

   return (
      <div className="row d-none d-md-block">
         <NavBarLinker 
            is_mobile={false}
            is_displayed={true}/>
      </div>     
   )
}


export default NavBarLg