const express = require('express');
const prisma = require('../registrator/prisma');
const { PrismaClientUnknownRequestError } = require('@prisma/client/runtime');
const Router = express.Router();

Router.get('/:id/orders', async (req, res) => {
 const id = req.params.id;
 const order = await prisma.orders.findMany( {where: { userId: Number(id)}, select : {id: true ,ordertime : true, products: true}});
 return res.json({data: order})
})


Router.post('/',  async (req, res) => {
    const {username, password, firstname, lastname, age} = req.body;
   try{
    const user = await prisma.user.create({ data: {
        username : username,
        password : password,
        firstname : firstname,
        lastname : lastname,
        age : age
  } });
  return res.json({ data: user }); 
}
catch(err){
    if(err){ return res.status(404).json({ error: 'invalid credentials'})} //username ze sxva veraferi movifiqre tishavda apps esec githubze vipove :(
                                                                               //errois dahendvla kai iqneboda rom meswavla :/
                                                                                 //tavissaqmes asrulebs imxolod unikalur usernamebsinaxavs dalshe aerrorebs d
}
});

  module.exports = Router;

