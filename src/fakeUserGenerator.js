const fake = require("faker");
const faker = require("faker/locale/es_MX");
const fs = require("fs");

const generateUsers = () => {
  let users = [];
  for (let id = 1; id <= 100; id++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const phone = faker.phone.phoneNumber();

    users.push({
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
    });
  }

  return { data: users };
};

const generatedData = generateUsers();

fs.writeFileSync("data.json", JSON.stringify(generatedData, null, "\t"));
