import React from 'react'
import { NavLink } from "react-router-dom"



const NavBarLinker = props => {

    const classes = "domain font-weight-light col-12 col-md-3 col-lg-2 mt-lg-0 text-left text-md-center text-no-wrap text-decoration-none"
    const sub_classes = "sub_domain font-weight-light d-none d-md-block col-12 col-md-1 mt-3 text-white text-center text-decoration-none px-md-1"

    const close_dropdown = () => {
        // check if exists in parent to prevent unnecessary re-render and reloading resources..
        if(props.onMenuItemClicked) {
            props.onMenuItemClicked()
        }
    }

    return (
        props.is_displayed === true
            ?   <div className="col-12 bg-primary mb-3 mb-md-0">

                    <div className="d-none d-md-block row col-12 col-lg-6 m-lg-auto">
                        <NavLink to="/" 
                            className="col-12 text-white text-center text-decoration-none text-nowrap px-0" >
                            <div className="display-3">The English Shelf</div>
                            <div className="display-6 my-1 ml-4">for teachers of English as a second language</div>
                        </NavLink>                     
                    </div>

                    <div className="row col-12 mt-5 mt-md-3">
                        <NavLink 
                            to="/lessons" onClick={close_dropdown}
                            className={`${classes}`}
                            style={({ isActive }) => ({ backgroundColor: isActive ? 'white' : '',color: isActive ? 'black' : 'white' })}>Lessons</NavLink>
                        <NavLink 
                            to="/letstalk" onClick={close_dropdown}
                            className={`${classes}`}
                            style={({ isActive }) => ({ backgroundColor: isActive ? 'white' : '',color: isActive ? 'black' : 'white'  })}>Let's Talk</NavLink>
                        <NavLink 
                            to="/protips" onClick={close_dropdown} 
                            className={`${classes}`}
                            style={({ isActive }) => ({ backgroundColor: isActive ? 'white' : '',color: isActive ? 'black' : 'white'  })}>Pro Tips</NavLink>

                        <div className="col-0 col-md-1 col-lg-3"></div>

                        <NavLink 
                            to="/terms" 
                            className={`${sub_classes} mb-n1 ml-auto mb-2`}>Terms</NavLink>
                        <NavLink 
                            to="/about"
                            className={`${sub_classes} mb-n1`}>About</NavLink>
                    </div>
                </div>
            :   null
    )
}


export default NavBarLinker