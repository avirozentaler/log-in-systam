const  express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();
const PORT = 3005;
const myDB = require('./db/mySql');

myDB.sequelize.authenticate().then(()=>{
  console.log('db-sql is connected');
}).catch(error=>console.log(error)) 

app.use(express.json());
app.use(cors());
app.use(router);
app.listen(PORT);

















  // //--http request--
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<html> <body><h1>hello  there people </h1></body></html>');
//     res.end(mes.messege);
//   }).listen(8080);