import React from 'react'
import { NavLink } from "react-router-dom";
import './App.css';
import { get_current_year } from './components/uiDater/uiDater'



const PrimaryFooter = props => {

   const toppermost = () => {
      let target = document.getElementById('top')
      if(target !== null) target.scrollIntoView()
   }

   return (
      <div className="col-12 text-left bg-secondary pt-2">
         <div className="container col-12">
            <div className="row">
               <div className="link col-12 d-sm-none text-center text-white" onClick={toppermost}>
                     back to top
               </div> 
            </div>
            <div className="row">

               <div className="col-12 col-sm-4 col-md-3">
                  <div className="row">
                     <NavLink 
                        to="/"
                        className="col-12 text-white">Home</NavLink>
                     <NavLink 
                        to="/privacy"
                        className="col-12 text-white" >Privacy</NavLink>
                     <NavLink 
                        to="/terms"
                        className="col-12 text-white text-nowrap" >Terms and Conditions</NavLink>
                     <NavLink 
                        to="/about"
                        className="col-12 text-white" >About</NavLink>
                  </div>
               </div>


               <div className="col-12 col-sm-4 col-md-3">
                  <div className="row">
                     <NavLink 
                        to="/lessons" 
                        className="col-12 text-white" >Lessons</NavLink>
                     <NavLink 
                        to="/letstalk"
                        className="col-12 text-white" >Let's Talk</NavLink>
                     <NavLink 
                        to="/protips"
                        className="col-12 text-white text-nowrap" >Pro Tips</NavLink>
                  </div>
               </div>

            </div>
            <div className="row text-center text-white bg-secondary my-3">
               <div className="col-12 text-center text-nowrap">Copyright © Kevin Hastie 2021 - {get_current_year()}</div>
            </div>
         </div>  
         <div className="d-sm-none col-12 text-center m-2 mb-4 inline">
            &nbsp;
         </div>
      </div> 
   )
}


export default PrimaryFooter