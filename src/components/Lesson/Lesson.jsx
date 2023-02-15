import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LessonNav from './LessonNav/LessonNav'
import LessonTitles from './LessonTitles/LessonTitles'
import LessonMeta from './LessonMeta/LessonMeta'
import LessonWorkSheet from './LessonWorkSheet/LessonWorkSheet'
import LessonBlock from './LessonBlock/LessonBlock'



const Lesson = props => {
    
    const [open_worksheet,setOpenWorksheet] = useState(false)
    let navigate = useNavigate();

    useEffect(() => {
        let target = document.getElementById('top')
        if(target !== null) target.scrollIntoView()
    },[])

    const back2List = () => {
        navigate(-1)
    }

    const toggleWorkSheet = () => {
        openWorkSheet()
        let target = document.getElementById('worksheet_top')
        if(target !== null) target.scrollIntoView()
    }

    const openWorkSheet = () => {
        setOpenWorksheet(!open_worksheet)
    }
    
    const { title,tagline,keywords,duration,content,author,worksheet_title,worksheet_path,image_path } = props.lesson

    return (
        props.lesson.title
            ?    <div className="lesson col-10 mx-auto my-5 border rounded bg-white">

                    <LessonNav back2List={back2List} />

                    <LessonTitles 
                        title={title} 
                        tagline={tagline} />

                    <LessonMeta 
                        keywords={keywords} 
                        duration={duration}
                        contributor={author} />
                            
                    {(worksheet_title !== " " && worksheet_title !== "" && image_path !== "")
                        ?  <div className="col-12" >
                                <div className="cta_link" onClick={openWorkSheet}>view worksheet..</div>
                                {open_worksheet === true
                                    ?   <LessonWorkSheet 
                                            image_path={image_path} 
                                            worksheet_path={worksheet_path} 
                                            toggleWorkSheet={toggleWorkSheet}/>
                                    :   null
                                }                                
                            </div>
                        : null 
                    }

                    {content !== undefined 
                        ? content.map((block,index) => {
                            return <LessonBlock key={index} block={block} />
                        })
                        : null}

                    <LessonNav back2List={back2List} />

                </div>
            :   null
    )
}


export default Lesson