const mysql=require('mysql');

const mysqlConnection = mysql.createConnection({ 
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_operation" 
}); 

mysqlConnection.connect((err) => { //to ensure database is connected with server 
    if (err) {
        throw err;
    }
    console.log("Database connected as id " + mysqlConnection.threadId);
});

module.exports=mysqlConnection;


