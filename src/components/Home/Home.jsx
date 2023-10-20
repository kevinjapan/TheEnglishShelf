import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom"



const Home = () => {

   useEffect(() => {
      let target = document.getElementById('top')
      if(target !== null) target.scrollIntoView()
   },[])

   return (
      <div className="App container col-12 text-center bg-primary p-0">

         <div className="row m-3">
            <div className="col-12 col-md-6 col-lg-4">
               <div className="jumbotron bg-white shadow opacity-low py-1 pb-n2 border rounded mt-4 text-justify p-3">                        
                  <div className="display-5 mt-n2 mb-2">Welcome</div>
                  <p>
                     TES is a lesson share resource for teachers of English as a 
                     second language. Created by a former JET ALT previously based in Ibaraki, Japan - the core lessons 
                     have all been used in real classrooms and many include lesson plans and worksheets.
                  </p>
                  <NavLink 
                     to="/lessons"
                     className="ml-2">
                     Start browsing the lessons
                  </NavLink>
               </div>
            </div>   
         </div>
      </div>
   )   
}


export default Home