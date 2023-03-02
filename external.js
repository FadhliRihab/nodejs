// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//  service: 'gmail',
//  auth: {
//         user: 'fadhlirihab123@gmail.com',
//         pass: 'khjzsydzqehbtqvm'
//     }
// });
// const mailOptions = {
//   from: 'bjack@gmail.com', // sender address
//   to: 'fadhlirihab123@gmail.com', // list of receivers
//   subject: 'Subject of your email', // Subject line
//   html: '<p>Your html here</p>'// plain text body
// };
// transporter.sendMail(mailOptions, function (err, info) {
//    if(err)
//      console.log(err)
//    else
//      console.log(info);
// });
// var generator = require('generate-password');

// var password = generator.generate({
// 	length: 20,
// 	numbers: true
// });

// // 'uEyMTw32v9'
// console.log(password);
const { v4: uuidv4 } = require("uuid");
uuidv4();
console.log(uuidv4());
