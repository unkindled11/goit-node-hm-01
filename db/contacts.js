const fs = require("fs/promises");
const path = require("path");
const { v4: uuid } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");

async function listContacts() {
  const result = await fs.readFile(contactsPath);
  return JSON.parse(result);
}

async function getContactById(id) {
  const contacts = await listContacts();
  const contact = contacts.find(
    (item) => JSON.stringify(item.id) === JSON.stringify(id)
  );

  if (!contact) {
    throw new Error("Contact not found");
  }
  return contact;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const indx = contacts.findIndex(
    (item) => JSON.stringify(item.id) === JSON.stringify(contactId)
  );
  if (indx === -1) {
    throw new Error("Contact not found");
  }
  const [result] = contacts.splice(indx, 1);
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
}

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = {
    id: uuid(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  console.log(typeof newContact.id);
  return newContact;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
