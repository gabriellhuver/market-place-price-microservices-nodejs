
const fs = require('fs')
const mailer = require('../src/lib/mailer')
const path = require("path")
let EmailTemplate = fs.readFileSync(path.resolve(__dirname, '../src/templates/template.html'), 'utf8')
try {


    async function run() {

        try {
            await mailer.transport.sendMail({
                from: 'Teste <easyeatdelivery@gmail.com>',
                to: "Gabriell <gabriell.is.huver@gmail.com>",
                subject: 'Cadastro de usuário',
                html: EmailTemplate
            })
        } catch (error) {
            console.log(error)
        }


    }
    run()
} catch (error) {
    console.log(error)
}

