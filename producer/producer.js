const { Kafka } = require('kafkajs');
const faker = require('faker');

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();

  // Enviar un mensaje cada 5 segundos
  setInterval(async () => {
    const message = {
      id: faker.random.number(),
      status: faker.random.arrayElement(['APPROVED', 'REJECTED']),
      account: faker.finance.account(),
      amount: faker.finance.amount(),
    };

    await producer.send({
      topic: 'transactions',
      messages: [{ value: JSON.stringify(message) }],
    });

    console.log('Mensaje enviado:', message);
  }, 5000);
};

run().catch(console.error);

