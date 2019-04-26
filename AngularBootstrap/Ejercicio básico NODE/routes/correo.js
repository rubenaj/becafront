const express = require('express');
  
let router = express.Router();
router.post('/', (req, res) => {
  var nodemailer = require('nodemailer');
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cursoangular1@gmail.com',
      pass: 'alicante46'
    }
  });
  var mailOptions = {
    from: req.body.email,
    to:'cursoangular1@gmail.com',
    subject: req.body.subject,
    text: req.body.text
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});
module.exports = router;