const dbConnect = require('../db.config.js')

getProductAll = function(callback){
    dbConnect.getConnection(function(err,conn){
        if(err){
            callback(err)
            return;
        } 
        conn.query("select * from product",function(err,rows,fields){
            conn.release();
            if(err){
                callback(err)
                return;
            } 
            callback("",rows);
        })
    })
}
getProductDetail = function(product_id,callback){
    dbConnect.getConnection(function(err,conn){
        if(err){
            callback(err)
            return;
        } 
        conn.query("select * from product where product_id=?",product_id,function(err,rows,fields){
            conn.release();
            if(err){
                callback(err)
                return;
            } 
            callback("",rows);
        })
    })
}
createProduct = function(prodObj,callback){
    dbConnect.getConnection(function(err,conn){
        if(err){
            callback(err)
            return;
        } 
        conn.query("insert into product set ?",prodObj,function(err,rows,fields){
            conn.release();
            if(err) {
                callback(err)
                return;
            }
            callback("",rows);
        })
    })
}
updateProduct = function(product_id,updateObj,callback){
    dbConnect.getConnection(function(err,conn){
        if(err){
            callback(err)
            return;
        } 
        conn.query("update product set ? where product_id="+product_id,updateObj,function(err,rows,fields){
            conn.release();
            if(err){
                callback(err)
                return;
            } 
            callback("",rows);
        })
    })
}
deleteProduct = function(product_id,callback){
    dbConnect.getConnection(function(err,conn){
        if(err){
            callback(err)
            return;
        } 
        conn.query("delete from product where product_id=?",product_id,function(err,rows,fields){
            conn.release();
            if(err){
                callback(err)
                return;
            } 
            callback("",rows);
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