// scripts/hashPassword.js
//
// Generates a bcrypt hash for your chosen admin password.
// Run it like this:
//
//   node scripts/hashPassword.js "YourStrongPassword123"
//
// Copy the printed hash into ADMIN_PASSWORD_HASH in .env.local.

const bcrypt = require("bcryptjs");

const password = process.argv[2];
if (!password) {
  console.error('Usage: node scripts/hashPassword.js "YourPassword"');
  process.exit(1);
}

const hash = bcrypt.hashSync(password, 10);
console.log("\nAdd this line to your .env.local:\n");
console.log(`ADMIN_PASSWORD_HASH=${hash}\n`);