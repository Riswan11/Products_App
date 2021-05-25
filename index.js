const express = require('express');
const app = express();
const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/man', (req, res) => {
    res.send('HELLO')
})

app.listen(3000, () => {
    console.log("Connected on PORT 3000")
})