const { getAll } = require("./contacts");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = getAll();
      console.log(contacts);
      break;

    case "get":
      break;

    case "add":
      break;

    case "remove":
      break;

    default:
      console.log("Unknown action");
  }
}
 
invokeAction(action:'getAll')