import React from 'react'
import { NavLink } from "react-router-dom"



const NavBarLinker = props => {

   const classes = "domain font-weight-light col-12 col-md-3 col-lg-2 mt-lg-0 pb-1 text-left text-md-center text-no-wrap text-decoration-none rounded-top"
   const sub_classes = "sub_domain font-weight-light d-none d-md-block col-12 col-md-1 mt-3 pb-3 text-center text-decoration-none px-md-1 rounded-top"

   const close_dropdown = () => {
      // check if exists in parent to prevent unnecessary re-render and reloading resources..
      if(props.onMenuItemClicked) {
         props.onMenuItemClicked()
      }
   }

   let active_bg = props.is_mobile === true ? '' : 'white'
   let active_color = props.is_mobile === true ? 'white' : 'black'
   let active_border = props.is_mobile === true ? 'solid 1px white' : ''

   return (
      props.is_displayed === true
         ?  <div className={`col-12 bg-primary mb-3 mb-md-0 p-0 ${props.is_mobile === true ? 'pb-3' : ''}`}>

               <div className="d-none d-md-block row col-12 col-lg-6 m-lg-auto">
                  <NavLink to="/" 
                     className="col-12 text-white text-center text-decoration-none text-nowrap px-0" >
                     <div className="display-3">The English Shelf</div>
                     <div className="display-6 my-1 ml-4">Resources for teachers of English as a second language</div>
                  </NavLink>                     
               </div>

               <div className={`d-flex align-items-end row w-100 ml-0 mt-0 mt-md-3 ${props.is_mobile === true ? 'bg-primary' : 'bg-secondary'} px-4 pt-2`}>
                  <NavLink 
                     to="/lessons" onClick={close_dropdown}
                     className={`${classes}`}
                     style={({ isActive }) => ({
                        backgroundColor: isActive ? active_bg : '',
                        color: isActive ? active_color : 'white',
                        borderBottom: isActive ? active_border : ''
                     })}>Lessons</NavLink>
                  <NavLink 
                     to="/letstalk" onClick={close_dropdown}
                     className={`${classes}`}
                     style={({ isActive }) => ({
                        backgroundColor: isActive ? active_bg : '',
                        color: isActive ? active_color : 'white',
                        borderBottom: isActive ? active_border : ''
                     })}>Let's Talk</NavLink>
                  <NavLink 
                     to="/protips" onClick={close_dropdown} 
                     className={`${classes}`}
                     style={({ isActive }) => ({
                        backgroundColor: isActive ? active_bg : '',
                        color: isActive ? active_color : 'white',
                        borderBottom: isActive ? active_border : ''
                     })}>Pro Tips</NavLink>

                  <div className="col-0 col-md-1 col-lg-3"></div>

                  <NavLink 
                     to="/terms" 
                     className={`${sub_classes} mb-n1 ml-auto`}
                     style={({ isActive }) => ({ backgroundColor: isActive ? 'white' : '',color: isActive ? 'black' : 'white'  })}
                     >Terms</NavLink>
                  <NavLink 
                     to="/about"
                     className={`${sub_classes} mb-n1`}
                     style={({ isActive }) => ({ backgroundColor: isActive ? 'white' : '',color: isActive ? 'black' : 'white'  })}
                     >About</NavLink>
               </div>
            </div>
         :  null
   )
}


export default NavBarLinker