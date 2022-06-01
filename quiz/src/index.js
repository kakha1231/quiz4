const express = require('express');
const userrouter = require('./routes/user')
const productrouter = require('./routes/products')
const orderrouter = require('./routes/orders')
const app = express();

app.use(express.json())
app.use('/user',userrouter);
app.use('/products',productrouter);
app.use('/order',orderrouter);

app.listen(8000, (req, res) => {
    console.log('listening on http://localhost:8000');
})



//#arshemteno amaze imdeni vichaliche gamocdas dedasvutireb :D