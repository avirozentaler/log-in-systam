const { query } = require('express');
const express = require('express');
const routUsers = require('./users');
const routTodos = require('./todos');
const { route } = require('./users');
const router = express.Router();
const bcrypt = require('bcrypt');



// router.get('/', (req, res) => {

//     res.write(`<h1>hello to the home page</>`);
//     res.write(`<h3>add "/users" to the URL to to get the user page</h3>  
//          <h3>add "/todos" to the URL to get the todos list</h3>`);
//     res.send();
// }
// );

router.post('/',  async(req, res) => {
    try{

        const { password } = req.body;

        // const salt = bcrypt.genSalt(4);
    
        const hashPass = await bcrypt.hash(password, 6);
        // const hashPass =  bcrypt.hashSync();
    
        console.log(`aaaaaaaaaaaaaaaaaaaaa hash pass >> ${hashPass}`);
        
        const returnPass =await bcrypt.compare(password,hashPass);
        // console.log(`aaaaaaaaaaaaaaaaaaaaa psss return >> ${returnPass}`);
    console.log( `rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr ${returnPass}`);
    
        res.send({hash:returnPass});
    }
    catch{
        (err=>res.send(err))
    }
   
});


router.use('/users', routUsers);
router.use('/todos', routTodos);


module.exports = router;