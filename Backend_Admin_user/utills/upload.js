const fs = require("fs");
const path = require("path");
const axios = require("axios");
const Category = require("./models/Category"); 

const downloadImage = async (url, folder) => {

  const ext = path.extname(new URL(url).pathname) || ".jpg";

  const filename = `${Date.now()}-${Math.random()
    .toString(36)
    .substring(2,8)}${ext}`;

  const dir = path.join("uploads","Categorys",folder);

  if(!fs.existsSync(dir)){
    fs.mkdirSync(dir,{recursive:true});
  }

  const filePath = path.join(dir,filename);

  const response = await axios({
    url,
    method:"GET",
    responseType:"stream"
  });

  await new Promise((resolve,reject)=>{
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    writer.on("finish",resolve);
    writer.on("error",reject);
  });

  return filePath.replace(/\\/g,"/");
}


const saveProduct = async(req,res)=>{
  try{

    const data = await Category .find();

    for(const item of data){

      const folderName = item.name.replace(/[^a-zA-Z0-9]/g,"_");

      // Download thumbnail
      const imagePath = await downloadImage(item.image, folderName);

      await Category.updateOne(
        {_id:item._id},
        {$set:{ image: imagePath}}
      )

    }

    res.status(201).json({
      message:"Products updated successfully",
      count:data.length
    });

  }catch(err){

    res.status(500).json({
      message:"Update failed",
      error:err.message
    })

  }
}

module.exports = {saveProduct}