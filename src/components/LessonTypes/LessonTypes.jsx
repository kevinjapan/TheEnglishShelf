
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
                tagline:"for beginner, intermediate and advanced students"
            }
            break
        case LESSON_TYPES.LETSTALKS:
            titles = {
                title:"Let's Talk",
                tagline:"starter notes for conversation classes"
            }
            break
        case LESSON_TYPES.PROTIPS:
            titles = {
                title:"Pro Tips",
                tagline:"for assistant language teachers"
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

