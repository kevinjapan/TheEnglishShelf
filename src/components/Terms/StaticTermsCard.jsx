import React, { useState,useEffect,useContext } from 'react'
import { AppContext } from '../AppContext/AppContext'



const StaticTermsCard = () => {
    
    const {setStatusMsg } = useContext(AppContext)
    const [sitetext_blocks,setSitetextBlocks] = useState([])

    useEffect(() => {
        const fetchSiteTextBlocks = async () => {
            try {
                const response = await fetch(`/sitetexts/terms-and-conditions.json`)
                const jsonDataSet = await response.json()
                if(jsonDataSet.sitetext) {
                    setSitetextBlocks(jsonDataSet.sitetext.blocks)
                }
            }
            catch(error) {
                // if resource not found, server returns a valid 200 OK html but json will fail
                setStatusMsg('Sorry, the page could not be fully loaded at this time.')
            }
        }
        fetchSiteTextBlocks()
    },[setStatusMsg])
     

    return (
        sitetext_blocks !== undefined 
            ?   <div className="container col-12 bg-white border rounded m-2">
                    {sitetext_blocks.map((block,index) => (
                        <div className="row block"
                            key={index}
                            block={block}>
                            <div className="col-12">
                                <div className={`${block.tag} text_block  text-justify ${block.class_name}`}>{block.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            :   null
    )
}


export default StaticTermsCard