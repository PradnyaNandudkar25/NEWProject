const mysql=require('mysql2');

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'student'
})
db.connect((err)=>{
    if(err){
        console.log('Error connecting to database',err);
    }
    else{
        console.log('Connected to Database');
    }      
})

module.exports=db;
