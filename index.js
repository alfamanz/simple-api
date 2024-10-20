const express = require('express');
   const app = express();
   const port = 3000;

   // Middleware untuk parsing JSON
   app.use(express.json());


var mainrouter = require('./routes/main'),
    apirouter = require('./routes/api')
   // Endpoint POST
   app.use('/', mainrouter)
app.use('/api', apirouter)
app.use(express.static(__dirname + "/public/"))
   // Jalankan server
   app.listen(port, () => {
       console.log(`Server is running at http://localhost:${port}`);
   });
   
   module.exports = app