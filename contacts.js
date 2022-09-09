const fs = require("fs/promises");

const contactsPath = "${__dirname}/contacts.json";

function getAll() {
  const result = fs.readFile(contactsPath);
  return result;
}

function getContactById(contactId) {}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  getAll,
};
