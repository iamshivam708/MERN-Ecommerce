const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')
const mongoose = require('mongoose')

//middle wares
const app = express();
app.use(bodyParser.json())
app.use(cors());
require('dotenv').config()

//routes
const UserRouter = require('./routes/User')
app.use('/user',UserRouter)

const ProductRouter = require("./routes/Product")
app.use("/product",ProductRouter)

const CategoryRouter = require("./routes/Categories")
app.use("/category", CategoryRouter)

const ProductDetailsRouter = require('./routes/ProductDetails')
app.use("/productDetails", ProductDetailsRouter)

const CartRouter = require("./routes/Cart")
app.use("/cart", CartRouter)

const WishlistRouter = require("./routes/Wishlist")
app.use("/wishlist", WishlistRouter)

const OrderRouter = require("./routes/Order")
app.use("/order", OrderRouter)


//database connection
mongoose.connect(process.env.CONNECTION_URL).then(() =>{
    console.log("database connected")
}).catch(err =>{
    console.log(err)
})

//port
const port = process.env.PORT
app.listen(port, () =>{
    console.log(`app running on port ${port}`)
})