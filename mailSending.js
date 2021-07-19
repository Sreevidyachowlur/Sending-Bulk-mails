const express = require('express');
const path = require('path');
const app = express();
// let arr=['chivikanna@gmail.com','sandeepkj90@gmail.com','sandeepkj55448150@gmail.com']


let arr=[
    'sandeepkj90@gmail.com',
    'sreevidyachowlur@gmail.com',
    'chivikanna@gmail.com',
    
   
    
    ] ;







app.get('/',(req,res)=>{
    const nodemailer = require('nodemailer');


    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sreevidyachowlur@gmail.com',
            pass: 'Sreesrii15'
        }
    });
    
    arr.forEach(element => {
      
        let mailDetails = {
            from: 'sreevidyachowlur@gmail.com',
            to: element,
            subject: 'Resume for NodeJs Developer/Javascript Developer',
            // text: 'Node.js testing mail for sending mail'
            html:`<pre>
            <p style="margin:0; padding:0 ; line-height:0">  Hi Sir/Madam,  </p>
            <p style="margin:0; padding:0 ; line-height:0">  My name is Sreevidya.I am fresher looking for software development job.</p>
            <p style="margin:0; padding:0 ; line-height:0"> <b> Please find my updated resume attached to this mail.  </b> </p>

            <p style="margin:0; padding:0 ; line-height:0"> <b> My skill sets are: </b> </p>
            <p style="margin:0; padding:0 ; line-height:0"> <b> Languages:</b> C, Javascript </p> 
            <p style="margin:0; padding:0 ; line-height:0"> <b> DataBase:</b> MongoDB, Mongoose Library </p>
            <p style="margin:0; padding:0 ; line-height:0"> <b> Web tech/FrameWork:</b> NodeJS, ExpressJS </p>
            <p style="margin:0; padding:0 ; line-height:0"> <b> Online Repository:</b> Bitbucket, Github, Gitlab </p>
            <p style="margin:0; padding:0 ; line-height:0"> <b> Tools used:</b> Visual Studio Code, Postman, Robo3T, Swagger(API Docs) </p>
            <p style="margin:0; padding:0 ; line-height:0"> <b> Node Modules:</b> express, mongoose, body-parser, jsonwebtoken, swagger-ui-express, bcrypt </p>
            <p style="margin:0; padding:0 ; line-height:0"> <b> Architecture:</b> Model View Controller (MVC) </p>
            
            <p style="margin:0; padding:0 ; line-height:0"> <b> Projects Implemented: </b> </p>
            <p style="margin:0; padding:0 ; line-height:0">  1. Banking Application- Url : https://github.com/Sreevidyachowlur/bank_api.git  </p>
            <p style="margin:0; padding:0 ; line-height:0">  2. Leave Portal- Url : https://github.com/Sreevidyachowlur/Leave-Portal.git </p>

            </pre>`,
            attachments: [
                {
                    filename: 'Y_Sreevidya_Resume.pdf', // <= Here: made sure file name match
                    path: path.join(__dirname, '/Y_Sreevidya_Resume.pdf'), // <= Here
                    contentType: 'application/pdf'
                }
            ]
        };
        
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log('Error Occurs');
                // res.send(err);
                console.log("error found",err,element);
            } else {
                console.log('Email sent successfully');
                console.log("data accepted",data.accepted);
                console.log("data rejected",data.rejected);
                // res.send(data);
            }
        });
    });
   
    
})

app.listen(3000, () => {
console.log('listening the port 3000 ')
})





