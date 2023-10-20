const months = {
   0: 'Jan',
   1: 'Feb',
   2: 'Mar',
   3: 'Apr',
   4: 'May',
   5: 'Jun',
   6: 'Jul',
   7: 'Aug',
   8: 'Sep',
   9: 'Oct',
   10: 'Nov',
   11: 'Dec'
}
 

export default function transform2UIDate(db_date) {

   if(db_date) {
      // rcvd db date - '2021-01-21 11:57:11' - failed in safari, so convert to using ',' separators
      let parts = db_date.split(' ')
      db_date = parts[0].replace(/-/g,",").replace(/:/g,",").replace(/ /g,",")

      let ui_date = new Date(db_date)
      if(ui_date.toString() !== "Invalid Date")
         return ui_date.getDate() + " " + months[ui_date.getMonth()] + " " + ui_date.getFullYear()
   }
   return ""
}

export function get_current_year() {
   const today = new Date()
   return today.getFullYear()
}