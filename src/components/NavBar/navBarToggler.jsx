import React from 'react'
import { NavLink } from "react-router-dom"



const NavBarToggler = props => {

    return (
        <div className="bg-primary">
            <div className="col-12 bg-primary py-2">
                <div className="row">
                    <NavLink 
                        to="/terms"
                        className="font-weight-light col-3 col-sm-2 ml-auto text-white text-center"  
                        onClick={props.onMenuItemClicked}>Terms</NavLink>
                    <NavLink 
                        to="/about"
                        className="font-weight-light col-3 col-sm-2 text-white text-center"
                        onClick={props.onMenuItemClicked}>About</NavLink>
                </div>
            </div>
            <div className=" col-12 bg-primary py-3">
                <div className="row bg-primary">
                    <NavLink 
                        to="/"
                        className="d-block d-sm-none col-12 display-5 text-white text-no-wrap text-decoration-none"
                        onClick={props.onMenuItemClicked}>
                        <div className="">The English Shelf</div>
                        </NavLink>
                    <NavLink 
                        to="/"
                        className="d-none d-sm-block d-md-none col-12 display-4 text-white text-no-wrap text-decoration-none"
                        onClick={props.onMenuItemClicked}>
                        <div className="">The English Shelf</div>
                        </NavLink>
                </div>
            </div>
            
            <div className="col-12 bg-primary mb-5">
                <div className="col-3 ml-auto mt-sm-n5">
                    <button 
                        className="btn btn-primary btn-sm bg-primary float-right" id="toggler"
                        onClick={props.onToggleNavBar}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false" role="img">
                        <title>Menu</title><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" 
                        d="M4 7h22M4 15h22M4 23h22"/></svg>
                    </button>
                </div>
            </div>
                
        </div>
    )
}


export default NavBarToggler