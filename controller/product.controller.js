var productDao = require("../dao/product.dao")
getProductAll = function(req,res,next){
    productDao.getProductAll(function(err,result){
        if(err) {
            next(err)
            return
        }
        res.json(result) 
    })
}
getProductDetail = function(req,res,next){
    var product_id = parseInt(req.params.id)
    var prodObj = {product_id:product_id,res:res,next:next}
    checkProduct(prodObj,function(result){
        res.json(result) 
    })
}
checkProduct = function(prodObj,cb){
    product_id = prodObj.product_id
    res = prodObj.res
    next = prodObj.next
    productDao.getProductDetail(product_id,function(err,result){
        if(err) {
            next(err);
            return;
        }
        else if(result){
            if(result.length == 0){
                res.json({"error":"Resource Not Found"})
            }else{
                cb(result);
                return;
            }
        }
    })
}
createProduct = function(req,res,next){
    var ProdObj = {
        product_name:req.body.product_name,
        product_price:req.body.product_price
    }
    productDao.createProduct(ProdObj,function(err,result){
        if(err){
            next(err);
            return;
        }
        res.json({"message":"Record Added successfully"})
    })        
}
updateProduct = function(req,res,next){
    var product_id = parseInt(req.params.id)
    var prodObj = {product_id:product_id,res:res,next:next}
    checkProduct(prodObj,function(result){
        var updProdObj = {
            product_name:req.body.product_name,
            product_price:req.body.product_price
        }
        productDao.updateProduct(product_id,updProdObj,function(err,result){
            if(err) {
                next(err);
                return;
            }
            res.json({"message":"Record Updated successfully"})
        })        
    })
}
deleteProduct = function(req,res,next){
    var product_id = parseInt(req.params.id)
    var prodObj = {product_id:product_id,res:res,next:next}
    checkProduct(prodObj,function(result){
        productDao.deleteProduct(product_id,function(err,result){
            if(err) {
                next(err);
                return;
            }
            res.json({"message":"Record deleted successfully"})
        })
    })
}

module.exports = {
    getProductAll,
    getProductDetail,
    createProduct,
    updateProduct,
    deleteProduct
}