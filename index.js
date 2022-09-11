const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./db/contacts");

const { Command } = require("commander");
const program = new Command();

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-p, --phone <type>")
  .option("-e, --email <type>");

program.parse(process.argv);

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await getContactById(id);
      console.table(contact);
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.table(newContact);
      break;

    case "remove":
      const deleteContact = await removeContact(id);
      console.table(deleteContact);
      break;

    default:
      console.log("Unknown action");
  }
}

// invokeAction({ action: "list" });
// invokeAction({
//   action: "get",
//   id: "2",
// });
// invokeAction({ action: "add", name: "dima", email: "zxczxc", phone: "zxx" });
// invokeAction({ action: "remove", id: "7227b411-3026-41a6-ae01-88bbacef14ca" });

invokeAction(options);
