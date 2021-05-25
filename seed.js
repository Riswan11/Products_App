const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("mongo server connected")
    })
    .catch((err) => {
        console.log("Error")
        console.log(err)
    })

/*
const p = new Product({
name: 'Ruby Grapefruit',
price: 1.99,
catrgory: 'fruit'
})
p.save().then(() => {
console.log(p)
})
.catch(() => {
    console.log("An error occurred try again")
    console.log(e)
})
*/

const seedProducts = [
    {
        name: 'Ruby Grapefruit',
        price: 1.99,
        category: "fruit"
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
