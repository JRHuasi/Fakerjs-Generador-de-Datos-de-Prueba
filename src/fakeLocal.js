const faker = require("faker/locale/es_MX");

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const jobTitle = faker.name.jobTitle();
const jobArea = faker.name.jobArea();
const prefix = faker.name.prefix();
const suffix = faker.name.suffix();
const phone = faker.phone.phoneNumber();
const words = faker.random.words(10);

console.log(`Empleado: ${prefix} ${firstName} ${lastName} ${suffix}`);
console.log(`Job Title: ${jobTitle}`);
console.log(`Job Area: ${jobArea}`);
console.log(`Phone: ${phone}`);
console.log({ words });

const weekday = faker.date.weekday();
const month = faker.date.month();
const pastDate = faker.date.past();
const futureDate = faker.date.future();
const recentDate = faker.date.recent();

console.log({ weekday });
console.log({ month });
console.log({ pastDate });
console.log({ futureDate });
console.log({ recentDate });
