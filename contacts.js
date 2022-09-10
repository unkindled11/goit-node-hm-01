const fs = require("fs/promises");
const path = require("path");
const { v4: uuid } = require("uuid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
  const result = await fs.readFile(contactsPath);
  return JSON.parse(result);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find(({ id }) => id === contactId);

  if (!contact) {
    throw new Error("Contact not found");
  }
  return contact;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const indx = contacts.findIndex(item=>item.id===contactId)
  if (!indx){
    throw new Error("Contact not found")
  }
  const [result] =books.splice(indx,1);
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result
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
  return newContact;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact
};
