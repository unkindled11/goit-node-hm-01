const fs = require("fs/promises");
const path = require("path");

const ObjectId = require("bson-objectid");

const contactPath = path.join(__dirname, "contacts.json");

const listContact = async () => {
  const result = await fs.readFile(contactPath);
  return JSON.parse(result);
};

const getContactById = async (id) => {
  const contacts = await listContact();
  const result = await contacts.find(
    (contact) => contact.id === JSON.stringify(id)
  );
  if (!result) {
    return null;
  }
  return result;
};

const removeContact = async (id) => {
  const contacts = await listContact();
  const indx = contacts.findIndex(
    (element) => element.id === JSON.stringify(id)
  );
  if (indx === -1) {
    return null;
  }
  const [result] = contacts.splice(indx, 1);
  await updateContact;
  return result;
};

const addContact = async (name, email, phone) => {
  const contacts = await listContact();
  const newContact = {
    id: ObjectId(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  return newContact;
};

const updateContact = async (data) => {
  await fs.writeFile(contactPath, JSON.stringify(data, null, 2));
};

module.exports = {
  listContact,
  getContactById,
  removeContact,
  addContact,
};
