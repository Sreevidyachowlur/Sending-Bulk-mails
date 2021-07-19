const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());
var jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const saltRounds = 10;


app.post('/',(req,res)=>{
    console.log(req.body);
    console.log(req.body.password);
    var data=req.body.password;
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        // Store hash in your password DB.

        console.log(hash);
        bcrypt.compare(data, hash, function(err, result) {
            // result == true
            console.log(result);
        });
    });
    var token=jwt.sign({
        name: 'sree'
      }, 'secret', { expiresIn: '1h' });
    
   console.log(token);

   jwt.verify(token, 'secret', function(err, decoded) {
    console.log(decoded.name) // sree
  });

//   jwt.verify(token, 'wrong-secret', function(err, decoded) {
//     // err
//     // decoded undefined
//   });











    
    res.send('success');
});











app.listen(3000, () => {
    console.log('listening the port 3000 ')
  })