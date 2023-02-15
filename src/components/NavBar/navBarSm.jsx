import React, { useState } from 'react'
import NavBarToggler from "./navBarToggler"
import NavBarLinker from "./navBarLinker"


// NavBar for sm screen sizes (bootstrap breakpoints)

const NavBarSm = () => {
  
    const [is_displayed,setIsDisplayed] = useState(false)

    const toggleNavBar = () => {
        setIsDisplayed(is_displayed ? false : true)
    }

    const menuItemClicked = () => {
        setIsDisplayed(false)
    }

    return (
        <div className="row d-block d-md-none">
            <NavBarToggler
                onToggleNavBar={toggleNavBar}
                onMenuItemClicked={menuItemClicked}/>
            <NavBarLinker
                is_displayed={is_displayed}
                onMenuItemClicked={menuItemClicked}/>
        </div>     
    )
}


export default NavBarSm