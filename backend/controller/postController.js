const db=require('../config/db');

const getAllpost =(req,res)=>{
    const query ="select * from Student";

    db.query(query,(err,results)=>{
        if(err){
            console.log('error fetching products',err);
        }
        else{
            res.json(results);
        }
    })
}

module.exports={
    getAllpost
}