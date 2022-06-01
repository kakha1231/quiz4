const express = require('express');
const routers = express.Router()
const prisma = require('../registrator/prisma')

routers.get('/', async (req, res) => {
    const product = await prisma.products.findMany()
    return res.json({data: product})
   });

   routers.post('/', async (req, res) => {
    const id = req.body.id;
    const product = await prisma.products.create({ data : { 
        name : req.body.name, 
        quantity : req.body.quantity,
        price : req.body.price, 
    } });
    return res.json({data: product});
})

routers.get('/:id', async (req, res) => {
    const id = req.params.id;
    const product = await prisma.products.findUnique({where: {id: Number(id)} });
    return res.json({data: product})
})

   module.exports = routers;