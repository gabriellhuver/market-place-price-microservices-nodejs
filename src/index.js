const { Kafka } = require('kafkajs')
const { config } = require('./config/kafka')
const RegistrationEmail = require('./topics/RegistrationEmail')
const kafka = new Kafka(config)
const EmailConsumer = kafka.consumer({ groupId: RegistrationEmail.groupId })
const run = async () => {
  await EmailConsumer.connect()
  await EmailConsumer.subscribe(RegistrationEmail.config)
  await EmailConsumer.run({ eachMessage: RegistrationEmail.eachMessage })
 
}

run().catch(console.error)