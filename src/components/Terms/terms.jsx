import React, { useState,useEffect } from 'react'
import TermsTools from "./termsTools"
import StaticTermsCard from "./StaticTermsCard"



const Terms = props => {

    const [selected_sitetext] = useState({"id":3})

    useEffect(() => {
        let target = document.getElementById('top')
        if(target !== null) target.scrollIntoView()
    },[])

    return (
        <div  className="container col-12">
            <div className="row">
                <div className="d-none d-lg-block col-lg-2">
                    <TermsTools />
                </div>
                <div className="col-12 col-sm-10 col-lg-8 mt-5 mb-5 mx-auto">
                    <StaticTermsCard
                        className="StaticTermsCard"
                        selected_sitetext={selected_sitetext}
                    />
                </div>
                    <div className="d-none d-lg-block col-lg-2">
                </div>
            </div>
        </div>
    )
    
}


export default Terms