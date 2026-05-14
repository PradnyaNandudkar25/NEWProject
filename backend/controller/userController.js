const db=require('../config/db');

exports. getAlluser =(req,res)=>{
    const query ="select * from Employee";

    db.query(query,(err,results)=>{
        if(err){
            console.log('error fetching employee',err);
        }
        else{
            res.json(results);
        }
    })
}
//getuserbyid GET

exports.getuserbyId=(req,res) => {
    const emp_id=req.params.id;

    const query="select * from Employee where emp_id=?";

    db.query(query,[emp_id],(err,results) => {
        if(err){
            console.log('error fetching employee by id',err);
        }
        else{
            res.json(results);
        }        
    })
}

//Value Insert POST

exports.insertUser=(req,res) => {
    const{emp_name,Address}=req.body;

    const query="insert into Employee(emp_name,Address)values(?,?)";

    db.query(query,[emp_name,Address],(err,results) => {
        if(err){
            console.log('error inserting employee',err);
        }
        else{
            res.json({message:'Employee inserted successfully',emp_id:results.insertId});
        }        
    })
}

//Update Record PUT(whole data update)

exports.updateUser=(req,res) => {
    const emp_id=req.params.id;
    const{emp_name,Address}=req.body;

    const query="update Employee set emp_name=?,address=? where emp_id=?";

    db.query(query,[emp_name,Address,emp_id],(err,results) => {
        if(err){
            console.log('error updating employee',err);
        }
        else{
            res.json({message:'Employee updated successfully'});
        }        
    })
}

//Update more values PATCH(one value)

exports.updateUserName=(req,res) => {
     const emp_id=req.params.id;
    const{Address}=req.body;

    const query="update Employee set address=? where emp_id=?";

    db.query(query,[Address,emp_id],(err,results) => {
        if(err){
            console.log('error updating employee',err);
        }
        else{
            res.json({message:'Employee updated successfully'});
        }        
    })
}



//Delete Record DELETE

exports.deleteUser=(req,res) => {
    const emp_id=req.params.id;

    const query="delete from Employee where emp_id=?";

    db.query(query,[emp_id],(err,results) => {
        if(err){
            console.log('error deleting employee',err);
        }
        else{
            res.json({message:'Employee deleted successfully'});
        }        
    })
}


// module.exports={
//     getAlluser,getuserbyId
// }