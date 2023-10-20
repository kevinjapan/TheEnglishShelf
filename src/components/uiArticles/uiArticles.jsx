import React from 'react'


export default function displayTitle(title) {

   if(title !== undefined) {
      let title_style = " display-4 mt-3"
      if(longestWordInText(title) >= 8) title_style = " display-5 mt-3"
      return (
         <React.Fragment>
               <h1 className={"d-sm-none " + title_style}>{title}</h1>
               <h1 className="d-none d-sm-block display-4">{title}</h1>
         </React.Fragment>
      )
   }
}

function longestWordInText(text) {
   
   let words = text.split(" ")
   let max_len = 0
   for(let i = 0 ; i < words.length ;  i++) {
      if(words[i].length > max_len) max_len = words[i].length
   }
   return max_len
}
