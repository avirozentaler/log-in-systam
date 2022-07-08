const express = require('express');
const routeTodos = express.Router();
const todosModel = require('../../models/todos');



console.log(express);
console.log(routeTodos);


routeTodos.get('/',(req,res)=>{

    try{
        const allTodos  =  todosModel.findAll();
        res.status(200).send({todos:allTodos});
    }catch(error){
        console.log(error);
        res.status(500).send('somthing wrong');
    }
})



module.exports = routeTodos;




// routeTodos.get('/arr', (req, res) => {  //1
  
//     res.send([...todosList]);
// console.log('called');
// });


// routeTodos.get('/:id', (req, res) => { //2

//  const id = req.params.id;
//     todosList.map((item)=>{
//         if(item.id == id){
//             res.send(`
//             <html>
//             <body> 
//             <h2>id: ${item.id}</h2>
//             <h3>title: ${item.title}</h3>
//             <h4>  ${item.completed ? ' completed!' : 'not completed!'}</h4>
//             </body>
//             </html>
//             `)
//         }
//     })
//     res.send("id does not found");
// });


// routeTodos.post('/add-todo', (req, res) => {  //3
//     const { userId, title } = req.body;
//     todosList.push({
//         "userId": userId,
//         "id": todosList.length,
//         "title": title,
//         "completed": false
//     });
//     res.send(`my user id: ${userId} the title:  ${title}`);
// });

// routeTodos.put('todos/update:id',(req,res)=>{
// console.log(req.id);
// });
// routeTodos.delete('todos/update:id',(req,res)=>{

// });
