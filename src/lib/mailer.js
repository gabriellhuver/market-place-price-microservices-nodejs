const nodemailer = require('nodemailer')
const {config} = require('../config/mail')
const transport = nodemailer.createTransport({
    service: 'Gmail',
    host: config.host,
    port: config.port,
    auth: {
        user: config.auth.user,
        pass: config.auth.pass
    }
});
module.exports = {
    transport
}