import React, { useState,useEffect } from 'react'
import AboutTools from './AboutTools/AboutTools'
import AboutCard from './AboutCard/AboutCard'


const StaticAbout = () => {

    const [selected_sitetext] = useState({"id":2})

    useEffect(() => {
        let target = document.getElementById('top')
        if(target !== null) target.scrollIntoView()
    },[])

    return (
        <div  className="container col-12">
            <div className="row">
                <div className="d-none d-lg-block col-lg-2">
                    <AboutTools />
                </div>
                <div className="col-12 col-sm-10 col-lg-8 mt-5 mb-5 mx-auto">
                    <AboutCard
                        className="AboutCard"
                        selected_sitetext={selected_sitetext}
                    />
                </div>
            </div>
        </div>
    )
}


export default StaticAbout