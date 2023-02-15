import React from 'react'
import { NavLink } from 'react-router-dom'
import transform2UIDate from '../../uiDater/uiDater'


const ListerListRow = props => {

    return (
        <div className="list_row bg-primary" style={{paddingBlock:'.15rem'}} >
            <NavLink 
                to={`/${props.service}/${props.item.slug}`}
                className={`p-1 text-decoration-none text-dark`}>

                {props.list_meta.cols.map((col,index) => (
                    col.list_col === "1" 
                        ?   <div key={index} className={` ${col.styles} bg-primary row col-12`} style={{marginInline:'auto'}}>
                                { col.input_type === "date" ?  transform2UIDate(props.item[col.col]) : props.item[col.col] }
                            </div>
                        :   null
                ))}
            
            </NavLink>
        </div>
    )
}


export default ListerListRow