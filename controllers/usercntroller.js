const Product = require('../models/product');
const router = require('../routes/routeuser');


module.exports.buy = async function(req,res){
    try {
        const new_product = await new Product({
            productID:req.body.productID,
            title:req.body.title,
            catageory:req.body.catageory,
            price:req.body.price
        })
        const product = await new_product.save();
        console.log(product);
        return res.status(200).json(product)
    } catch (error) {
        if(error){
            console.log(error);
            return;
        }
        return res.status(200).json(error);
    }
}

module.exports.check = async function(req,res){
    try {
     const product = await Product.findOne({
        productID:req.body.productID
     })

     if(!product){
      return res.status(404).json("product is not found");
     }
     console.log(product);
     return res.status(200).json(product)
    } catch (error) {
        if(error){
            console.log(error);
            return;
        }
        return res.status(200).json(error);
    }
}

module.exports.delete = async function(req,res){
   try {
    const product = await Product.findOne({
        productID:req.body.productID,
     })

     if(!product){
      return res.status(404).json("product is not found");
     }
     const del = await Product.findByIdAndDelete(product._id,{
        id:product._id
     })
     return res.status(200).json("Deleted Succesfully")
   } catch (error) {
    if(error){
        console.log(error);
        return;
    }
    return res.status(200).json(error);
   }
}