const nodemailer = require(`nodemailer`)

// creating nodemailer transporter

const transporter = nodemailer.createTransport({

    host: 'smtp.ethereal.email',
    port: 587,
    auth: {

        user: 'edwin.willms41@ethereal.email',
        pass: 'bsVuYCMfbFr2Hv66Kv'
    }
})

const sendMessage = async (req, res) => {
    
    // data

    const data = { name: req.body.name, email: req.body.email, body: req.body.body }

    // logic

    await transporter.sendMail({

        from: 'PortfolioVisitor', // sender address
        to: 'hask600700@gmail.com', // recipient address

        subject: 'Hello مرحبــاً',
        text: `${data.name}\n====\n${data.email}\n====\n${data.body}`            
    })

    // redirecting to home page

    res.redirect(`/success`)
}

module.exports = sendMessage