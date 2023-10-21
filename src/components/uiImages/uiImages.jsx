
// getImgSrcOrBlank
// return blank img if img resource not found

const getImgSrcOrBlank = image_path => {

   let imgSrc

   try {
      imgSrc = require('../../assets/lesson_imgs/' + image_path + '')
   } 
   catch {
      imgSrc = require('../../assets/lesson_imgs/no_img.jpg')
   }
   return imgSrc
}

export default getImgSrcOrBlank