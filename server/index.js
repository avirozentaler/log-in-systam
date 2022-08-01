require('dotenv').config();
const myDB = require('./db/mySql');

const  express = require('express');
const router = require('./router');
const cookiePasrser = require('cookie-parser')
const app = express();
const PORT = 3005;
const cors = require('cors');

myDB.authenticate().then(()=>{
  console.log('db-sql is connected');
}).catch(error=>console.log(error)) 
// app.use(cors);

app.use(cookiePasrser());
app.use(cors({
  origin:["http://localhost:3000"],
  credentials:true
}));
app.use(express.json());

// {
//   origin:'*', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200,
// }
app.use(router);
app.listen(PORT);

















  // //--http request--
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<html> <body><h1>hello  there people </h1></body></html>');
//     res.end(mes.messege);
//   }).listen(8080);