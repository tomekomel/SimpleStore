const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  console.log("Hey");
  const tom = { name: 'Tom', age: 36, cool: true };
  //res.send('Hey! It works!');
  res.json(tom);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
