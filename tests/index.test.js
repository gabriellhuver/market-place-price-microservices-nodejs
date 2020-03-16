const { Kafka } = require('kafkajs')
const kafka = new Kafka({
    clientId: 'market-place-price',
    brokers: ['127.0.0.1:9092']
})


try {
    const producer = kafka.producer()

    async function run() {
        await producer.connect()
        await producer.send({
            topic: 'sendConfirmationEmail',
            messages: [
                { value: JSON.stringify({ email: 'gabriell.is.huver@example.com', name: 'Gabriell Huver', link: "google.com" }) },
            ],
        })
    }
    run()
} catch (error) {
    console.log(error)
}

