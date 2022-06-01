const express = require('express');
const routers = express.Router()
const prisma = require('../registrator/prisma')

const router = express.Router();

router.post('/', async (req, res) => {
  
  const user = await prisma.user.findUnique({where : {id: req.body.userId }});
 const products = await prisma.products.findUnique ({where : {id: req.body.itemId }});

 if(products && user && products.quantity>0){

    const order = await prisma.orders.create( {data :{userId: req.body.userId, productId: req.body.itemId, ordertime: new Date()} } );
 
    await prisma.products.update( { where : {id: req.body.itemId}, data :{name: products.name, id: products.id, price: products.price, quantity: products.quantity - 1}})

    return res.json({data : order});
 }
 else if(products.quantity<=0){
     return res.status(404).json({error : 'item is out of stock'})
  }
    else return res.status(404).json({error : "item or user not found"});
})

module.exports = router;