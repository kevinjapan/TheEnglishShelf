import React, { useState,useEffect } from 'react'
import StaticPrivacyCard from "./StaticPrivacyCard";
import PrivacyTools from "./privacyTools";



const Privacy = () => {

    const [selected_sitetext] = useState({"id":70})

    useEffect(() => {
        let target = document.getElementById('top')
        if(target !== null) target.scrollIntoView()
    },[])

    return (
        <div  className="container col-12">
            <div className="row">
                <div className="col-2 d-none d-lg-block">
                    <PrivacyTools />
                </div>
                <div className="col-12 col-sm-10 col-lg-8 mt-5 mb-5 mx-auto">
                    <StaticPrivacyCard
                        className="StaticPrivacyCard"
                        selected_sitetext={selected_sitetext}
                    />
                </div>
            </div>
        </div>
    )
}


export default Privacy