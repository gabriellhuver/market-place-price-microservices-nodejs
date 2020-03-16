const mailer = require('../lib/mailer')
const fs = require('fs')
const path = require('path')

let EmailTemplate = fs.readFileSync(path.resolve(__dirname, '../templates/template.html'), 'utf8')
module.exports = {
    groupId: "Mailer",
    config: {
        topic: 'sendConfirmationEmail',
        fromBeginning: true
    },
    eachMessage: async ({ topic, partition, message }) => {
        console.log({
            topic,
            partition,
            offset: message.offset,
            value: message.value.toString(),
        })
        const user = JSON.parse(message.value)
        console.log(user)
        await mailer.transport.sendMail({
            from: 'Queue Test <queue@queuetest.com.br>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: EmailTemplate.replace("#user#", user.name).replace("#link#", user.link)
        })
    },
}
const person = (firstName, lastName) => (

    {
        first: firstName,
        last: lastName
    }
)

console.log(person("Jill", "Wilson"));