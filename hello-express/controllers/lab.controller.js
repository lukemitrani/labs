
const router = require('express').Router();
const pages = require('../pages/page.json');



// router.get('/', (req, res) => {
//     res.send('Hello home!');
//  })


 router.get('/', (req, res) => {
    res.send(("<h1>Hello, <b>Friend</b>!</h1>"));
 })
//  in url type http://localhost:5001/lab



// router.get('/:key', (req, res )=> {
//     console.log(req.params)
//   })







module.exports = router; 