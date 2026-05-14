
const db=require('../config/db');

exports. getProduct =(req,res)=>{
    const query ="select * from Product";

    db.query(query,(err,results)=>{
        if(err){
            console.log('error fetching products',err);
        }
        else{
            res.json(results);
        }
    })
}



