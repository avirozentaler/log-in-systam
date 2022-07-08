const { query } = require('express');
const express = require('express');
const routUsers = require('./users');
const routTodos = require('./todos');
const { route } = require('./users');
const router = express.Router();



router.get('/', (req, res) => {

    res.write(`<h1>hello to the home page</>`);
    res.write(`<h3>add "/users" to the URL to to get the user page</h3>  
         <h3>add "/todos" to the URL to get the todos list</h3>`);
    res.send();
}
);




router.use('/users', routUsers);
router.use('/todos', routTodos);


module.exports = router;