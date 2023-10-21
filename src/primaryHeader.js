import React from 'react'
import NavBarLg from './components/NavBar/navBarLg'
import NavBarSm from './components/NavBar/navBarSm'
import './App.css';


const PrimaryHeader = props => {
    
   return (
      <div className="col-12 ">
         <NavBarLg />
         <NavBarSm />          
      </div> 
   )
}


export default PrimaryHeader