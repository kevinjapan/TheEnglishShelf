import React, { useEffect,useContext } from 'react'
import { AppContext } from '../AppContext/AppContext'

// we employ a simple flash message for all status msgs and errors.
// for production, critical issues would be better as fixed notes 

const AppStatus = props => {

    const {status_msg,setStatusMsg} = useContext(AppContext)

    useEffect(() => {
        // eslint-disable-next-line
        let clear_message // prev. comment prevents warning ("clear_message not used.."")
        if(status_msg !== "") {clear_message = setTimeout(() => setStatusMsg(""),3500)}

        return (clear_message) => {
            clearTimeout(clear_message)
        }
    },[status_msg,setStatusMsg])

    return (
        status_msg !== "" 
            ?   <div className="app_status">{status_msg}</div>
            :   null
    )
}


export default AppStatus