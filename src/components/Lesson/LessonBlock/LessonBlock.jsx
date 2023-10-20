import React from 'react'
import ReactHtmlParser from 'react-html-parser'


const LessonBlock = props => {

   let block_element = ''
   const { tag,text,class_name } = props.block

   switch(tag) {
      case "img":
         block_element = `<img src={imgHandler(text)} alt="" class={class_name} />`
         break
      case "":
         block_element = `<div className="col-12">${text}</div>`
         break
      default:
         block_element = `<${tag} class="${class_name}">${text}</${tag}>`
   }
   return (
      <div className="col-12">{ReactHtmlParser(block_element)}</div>
   )
}


export default LessonBlock