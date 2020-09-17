const express = require('express');
const router = express.Router();


router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="GET" ><input placeholder="Enter product name" name="title"><button type="submit">add product</button></form>');
});


router.get('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
