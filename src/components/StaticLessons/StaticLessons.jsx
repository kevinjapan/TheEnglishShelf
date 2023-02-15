import React, { useState,useEffect } from 'react'
import StaticLister from "../StaticLister/StaticLister"
import StaticLessonsTitles from "./StaticLessonsTitles/StaticLessonsTitles"



const StaticLessons = props => {

    const [service,setService] = useState(props.service)
    const [service_filter] = useState("type=1")

    useEffect(() => {
        let target = document.getElementById('top')
        if(target !== null) target.scrollIntoView()
    },[])

    useEffect(() => {
        setService(props.service)
    },[props.service])

    let lister_config = {
        l_service: service,
        l_service_filter: service_filter,
        l_in_list:true,
        l_can_create:false,
        l_is_col_titles:false,
        l_order_by:"title",
        l_view:"card",
        l_card_width:props.card_width || "col-12 col-sm-6 col-md-6 col-lg-4",
        l_paginate:true,
        l_items_per_page:7,
        l_filter:props.filter,
        l_filter_value:parseInt(props.filter_value)
    }

    return (
        <div className="col-12 bg-white mb-5 ui_tools">
            <StaticLessonsTitles 
                filter_value={props.filter_value}
                title="Lesson" 
                tagline="for beginner, intermediate and advanced students"
            />
            <div className="row bg-white">
                <div className="col-12 col-md-11 m-auto">                    
                    <StaticLister config={lister_config} />
                </div>
            </div>
        </div>
    ) 
}


export default StaticLessons