require('dotenv').config()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const mailOptions = {
    from: 'beatstarstestuser@gmail.com',
    to: 'beatstarstestuser@gmail.com',
    subject: 'test2',
    text: 'text2'
}

transporter.sendMail(mailOptions, err => {
    console.log(err)
})