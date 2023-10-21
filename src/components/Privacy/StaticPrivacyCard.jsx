import React, { useState,useEffect,useContext } from 'react'
import { AppContext } from '../AppContext/AppContext'



const StaticPrivacyCard = () => {

   const {setStatusMsg } = useContext(AppContext)
   const [sitetext_blocks,setSitetextBlocks] = useState([])

   useEffect(() => {
      const fetchSiteTextBlocks = async () => {
         try {
               const response = await fetch(`/sitetexts/privacy.json`)
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
      <div className="container bg-white col-12 m-2">
         {sitetext_blocks !== undefined 
            ?  sitetext_blocks.map((block,index) => (
                  <div className="row block" key={index} block={block}>
                     <div className="col-12">
                        <div className={`${block.tag} text_block  text-justify ${block.class_name}`}>{block.text}</div>
                     </div>
                  </div>
               ))
            : null
         }
      </div>
   )
}


export default  StaticPrivacyCard