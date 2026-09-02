const nodemailer = require("nodemailer");

async function main() {
  let testAccount = await nodemailer.createTestAccount();
  console.log("SMTP account:", testAccount);
}

main();
