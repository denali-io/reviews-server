const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const db = require('./db')
// console.log(db.getReviews)
port = 5000

app.get('/', (req, res) => {
    res.send('HELLO FROM SQUAWK!!!')
})

app.get('/restaurants/:restaurantId', (req, res) => {
    console.log(req.params)
    let restaurant = req.params.restaurantId
    
    let start = parseInt(req.query.start)
    let sort = req.query.sort_by
    let search = req.query.q
    db.getReviews(restaurant, start, sort, search)
    
    res.send('searched')
})

app.listen(port, () => console.log(`SQUAWK listening on port ${port}!`))