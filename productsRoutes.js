const express=require("express");
const { getPro ,searchProduct,addProduct,updateProduct,removeProduct} = require('./productData');
const router=express.Router()
//get product list
router.get('/getall',getPro);
router.get('/get/:name',searchProduct);
router.post('/add',addProduct);
router.put('/update/:id',updateProduct)
router.delete("/remove/:name",removeProduct)
module.exports=router;