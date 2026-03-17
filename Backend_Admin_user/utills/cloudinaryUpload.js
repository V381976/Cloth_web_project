const cloudinary = require("../config/Cloudinary");

// const UploadManyimages= async (imagePaths) => {
//      const urls = [];
//      for(const img of imagePaths) {
//         const result = await cloudinary.uploader.upload(img ,{
//             folder : "CategoryImg" 
//         });
//         urls.push(result.secure_url);

//      }
//      return urls ;
// }



const UploadManyimages  = async (imagePaths) =>{


const  results =   await cloudinary.uploader.upload(imagePaths ,{
    folder : "Category"
})
  return results.secure_url;
}




module.exports = { UploadManyimages } ; 