
export const LESSON_TYPES = {
    LESSONS: 1,
    LETSTALKS: 2,
    PROTIPS: 3
}

export const get_lesson_type_titles = type => {

   let titles = {}

   switch(type) {
      case LESSON_TYPES.LESSONS:
         titles = {
            title:"Lessons",
            slug:"lessons",
            tagline:"Adaptable lessons for students of all levels"
         }
         break
      case LESSON_TYPES.LETSTALKS:
         titles = {
            title:"Let's Talk",
            slug:"letstalk",
            tagline:"Starter notes for conversation classes"
         }
         break
      case LESSON_TYPES.PROTIPS:
         titles = {
            title:"Pro Tips",
            slug:"protips",
            tagline:"Tips for Assistant Language Teachers"
         }
         break
      default:
         titles = {
            title:"",
            tagline:""
         }
   }
   return titles
}

