const mysqlConnection = require("./database");
//Display all products details stored in DATABASE
const getPro = async(req,res)=>{
    
        const query = "SELECT * FROM `products`";
        console.log(`Executing query: ${query}`);
   mysqlConnection.query(query,(err,results)=>{
    if (err) {
        console.log(err)
        res.json({
            success:false,
            message:'Error in GET ALL PRODUCTS API',
            error: err.message
        })
    }
            if (results.length>0) {  //use array to stored data fetching from database ,if no data in database its means array length is 0, no data in array 
                return res.json({
                    success: true,
                    message:"Products Data",
                    results
                });
            } else {
                return res.json({
                    success: false,
                    message:"No Products Data"
                });
            } 
   })
};

//search product from a DATABASE
const searchProduct=async(req,res)=>{
    const proName=req.params.name
    if(!proName){
        return res.json({
            success: false,
            message:"enter product name"
        })
    }
    const query1 = "SELECT * FROM `products` WHERE `ProductName`=?";
       
   mysqlConnection.query(query1, [proName],(err,results)=>{
    if (err) {
        console.log(err)
        res.json({
            success:false,
            message:'Error in searching product detail',
           error: err.message
        })
    }
            if (results.length> 0) {
                return res.json({
                    success: true,
                    message:"Products Data",
                    results:results[0]
                });
                
            
            } else {
                return res.json({
                    success: false,
                    message:"No Products Found"
                });
            } 
   });
}

   //ADD PRODUCT IN API
 const addProduct=(req,res)=>{
    const {productId,ProductName,Description,Quantity,price}=req.body
    if(!productId  ||  !ProductName  ||  !Description  ||  !Quantity   ||  !price )
    {
        return res.json({
            success :false,
            message:"Complete missing Fields"
        })
    }
    const query2 = "INSERT INTO `products` ( `productId`,`ProductName`, `Description`, `Quantity`, `price`) VALUES (?,? ,? ,? ,? )";
       
   mysqlConnection.query(query2, [productId,ProductName,Description,Quantity,price],(err,results)=>{
    if (err) {
        console.log(err)
        res.json({
            success:false,
            message:'Error in insert Query',
           error: err.message
        })
    }
                return res.json({
                    success: true,
                    message:"New Products Details are stored!",
                    
                });
                
   });
 }
//Update Product Detail
const updateProduct=(req,res)=>{
    const { ProductName,Description,Quantity,price}=req.body
    const productId=req.params.id;
    const query3 = " UPDATE `products` SET   `ProductName`=?, `Description`=?, `Quantity`=?, `price`=? WHERE `productId` = ? ";
       
   mysqlConnection.query(query3, [ ProductName,Description,Quantity,price,productId],(err,results)=>{
    if (err) {
        console.log(err)
       return res.json({
            success:false,
            message:'Error in Update Product',
           error: err.message
        })
    }
    if (results.affectedRows === 0) {
        return res.json({
            success: false,
            message: 'Product not found or not updated'
        });
    }
                return res.json({
                    success: true,
                    message:"Products Details are Updated Successfully!",
                    
                });
                
   });
 }

 //Delete Product

 const removeProduct=(req,res)=>{
    const productName=req.params.name
    if(!productName){
        return res.json({
            success: false,
            message:"enter product name"
        })
    }
    
    const query4 = " DELETE FROM `products`  WHERE `ProductName`=? ";
       
   mysqlConnection.query(query4, [ productName],(err,results)=>{
    if (err) {
        console.log(err)
       return res.json({
            success:false,
            message:'Error in deleting require Product',
           error: err.message
        })
    }
                return res.json({
                    success: true,
                    message:"Products DeletedSuccessfully!",
                    
                });
                
   });
 }
module.exports={getPro,searchProduct,addProduct,updateProduct,removeProduct};