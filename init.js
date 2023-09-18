const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => console.log("connection"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "Nirmal",
    to: "Dhruvi",
    msg: "Send me your exam sheet",
    created_at: new Date(),
  },
  {
    from: "Shan",
    to: "Nirmal",
    msg: "All the best For exam",
    created_at: new Date(),
  },
  {
    from: "Kaushal",
    to: "Dhruvi",
    msg: "How are you??",
    created_at: new Date(),
  },
  {
    from: "Het",
    to: "Gitanshu",
    msg: "teach me JS callbacks",
    created_at: new Date(),
  },
  {
    from: "Nir",
    to: "Mhek",
    msg: "How's your day?? Buddy",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
