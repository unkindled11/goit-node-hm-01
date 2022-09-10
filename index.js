const { listContacts, getContactById, addContact } = require("./contacts");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.log(contacts);
      break;

    case "get":
      const contact = await getContactById(id);
      console.log(contact);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const deleteContact = await  removeContact(id)
      console.log(deleteContact)
      break;

    default:
      console.log("Unknown action");
  }
}

invokeAction({ action: "list" });
// invokeAction({
//   action: "get",
//   id: "2",
// });
// invokeAction({ action: "add", name: "dima", email: "zxczxc", phone: "zxx" });
invokeAction({action:"remove", id:"1"})