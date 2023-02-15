import React, { useState,useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"
import { AppContext } from "./components/AppContext/AppContext"
import './App.css'
import StaticPrimaryLayout from "./StaticPrimaryLayout"



const App = props => {

    // AppContext - could move into AppProvider 
    const [lessons_list,setLessonsList] = useState([])
    const [lessons_list_meta,setLessonsListMeta] = useState([])
    const [status_msg,setStatusMsg] = useState("")
    
    useEffect(() => {
        const fetchJsonDataSet = async () => {
            try {
                const response = await fetch(`/lessons/Lessons-List-Meta.json`)
                const jsonDataSet = await response.json()
                if(jsonDataSet.list_meta) {
                    setLessonsListMeta(jsonDataSet.list_meta)
                }
            }
            catch(error) {
                // if resource not found, server returns a valid 200 OK html but json will fail
                setStatusMsg('Sorry, the lessons could not be loaded at this time.')
            }
        }
        fetchJsonDataSet()
    },[])

    useEffect(() => {
        const fetchJsonDataSet = async () => {
            try {
                const response = await fetch(`/lessons/Lessons-List.json`)
                const jsonDataSet = await response.json()
                if(jsonDataSet.lessons) {
                    setLessonsList(jsonDataSet.lessons)
                }
            }
            catch(error) {
                // if resource not found, server returns a valid 200 OK html but json will fail
                setStatusMsg('Sorry, the lessons could not be loaded at this time.')
            }
        }
        fetchJsonDataSet()
    },[])

    return (
        <AppContext.Provider value={{lessons_list,setLessonsList,lessons_list_meta,setLessonsListMeta,status_msg,setStatusMsg}}>
            <BrowserRouter>
                <StaticPrimaryLayout />
            </BrowserRouter>
        </AppContext.Provider>
    )
}


export default App