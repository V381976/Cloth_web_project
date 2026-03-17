const errorHandler = (err,req,res ,next) =>{

    
    const statuscode = err.statuscode || 500 ;
    res.status(statuscode).json({
        success : false ,
        message : err.message || "server Error"
    })
};

module.exports = errorHandler ;
