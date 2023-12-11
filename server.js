const express = require("express");
const { faker } = require('@faker-js/faker');

const app = express();
const port = 8000;

// req is short for request
// res is short for response

const createUser = () => ({
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    _id: faker.string.uuid()
  })
;

const createCompany = () => ({
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    country: faker.location.country(),
  }
})


app.get("/api/user/new", (req, res) => {
  const newUser = createUser()
  res.json(newUser)
})

app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompany()
  res.json(newCompany)
})

app.get("/api/user/company", (req, res) => {
  const newUser = createUser()
  const newCompany = createCompany()
  const combination = {
    user: newUser,
    company: newCompany,
  }
  res.json(combination)
})

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );