const connection=require("../config/db");

exports.getAllUsers=(req,res)=> {
    connection.query("SELECT * FROM userdata",(err,rows,fields)=>{
        if(err) throw err;
        res.json(rows);
    }
    )
}