import React from 'react'
import { NavLink } from "react-router-dom"



const Home = () => {

    return (
        <div className="App container col-12 text-center bg-primary">

            <div className="row m-3">

                <div className="d-md-none jumbotron col-12 col-md-7 col-lg-5 p-1 px-lg-1 px-md-1 text-left bg-transparent">
                    <div className="lead ml-2 mt-2 text-left bg-primary text-white p-2">
                        for teachers of English as a second language
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <div className="jumbotron bg-light py-1 pb-n2 border rounded mt-3 text-justify p-2">                        
                        <div className="display-6">Welcome</div>
                        <p>TES is a lesson share resource for teachers of English as a 
                        second language. Created by a former JET ALT based in Ibaraki, Japan, the core lessons 
                        have all been used in real classrooms and many include lesson plans and worksheets.</p>
                        <NavLink 
                            to="/lessons"
                            className="ml-2" >Start browsing lessons</NavLink>
                    </div>
                </div>   
            </div>
        </div>
    )   
}


export default Home