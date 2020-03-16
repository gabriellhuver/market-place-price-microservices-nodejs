const { Kafka } = require('kafkajs')
const kafka = new Kafka({
    clientId: 'market-place-price',
    brokers: ['localhost:9092']
})


try {
    const producer = kafka.producer()

    async function run() {
        await producer.connect()
        await producer.send({
            topic: 'sendConfirmationEmail',
            messages: [
                { value: JSON.stringify({ email: 'gabriell.is.huver@gmail.com', name: 'Gabriell Huver', link: "google.com", createAt: new Date().toUTCString() }) },
            ],
        })
    }
    run()
} catch (error) {
    console.log(error)
}

