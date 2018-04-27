var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Goods = require('../models/goods');

//连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/shop')
mongoose
  .connection
  .on("connected", function () {
    console.log("MongoDB connected success.")
  })
mongoose
  .connection
  .on("error", function () {
    console.log("MongoDB connected fail.")
  })
mongoose
  .connection
  .on("disconnected", function () {
    console.log("MongoDB connected disconnected.")
  })

router.get("/", function (req, res, next) {
  //    res.send("hello, goods list . ")
  let page = parseInt(req.param("page"));
  let pageSize = parseInt(req.param("pageSize"))
  let sort = parseInt(req.param("sort"));
  //1 是升序， -1 是降序
  let priceLevel = req.param("priceLevel")
  let skip = (page-1)*pageSize;
  var priceGt = '',priceLte = '';
  let params = {}
  if(priceLevel !== 'all'){
    switch(priceLevel){
        case '0':priceGt=0;priceLte=100;break;
        case '1':priceGt=100;priceLte=500;break;
        case '2':priceGt=500;priceLte=1000;break;
        case '3':priceGt=1000;priceLte=5000;break;
    }
    params = {
        salePrice:{
            $gt:priceGt,
            $lte:priceLte
        }
    }
  }
 

  let goodsModel = Goods.find(params).skip(skip).limit(pageSize); //查找， 跳过，一页几条 
  goodsModel.sort({'salePrice': sort})
  goodsModel
    .exec(function (err, doc) {
      if (err) {
        res.json({
          status: '1',
          msg: err.message
        })
      } else {
        res.json({
          status: '0',
          msg: '',
          result: {
            count: doc.length,
            list: doc
          }
        })
      }
    })
})

module.exports = router;
