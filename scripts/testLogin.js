// scripts/testLogin.js
//
// Diagnostic tool — checks your ADMIN_USERNAME / ADMIN_PASSWORD_HASH in
// .env.local against a username/password you provide, without needing the
// browser or the dev server. This isolates whether the problem is your
// .env.local values or something else (cookies, restart, etc).
//
// Run it like this:
//
//   node scripts/testLogin.js "admin" "AMC12345#"

require("dotenv").config({ path: ".env.local" });
const bcrypt = require("bcryptjs");

const [, , username, password] = process.argv;

if (!username || !password) {
  console.error('Usage: node scripts/testLogin.js "<username>" "<password>"');
  process.exit(1);
}

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;

console.log("\n--- What was loaded from .env.local ---");
console.log("ADMIN_USERNAME:", JSON.stringify(ADMIN_USERNAME));
console.log(
  "ADMIN_PASSWORD_HASH length:",
  ADMIN_PASSWORD_HASH ? ADMIN_PASSWORD_HASH.length : "(missing)"
);
console.log(
  "ADMIN_PASSWORD_HASH looks valid (starts with $2):",
  !!ADMIN_PASSWORD_HASH && ADMIN_PASSWORD_HASH.startsWith("$2")
);

if (!ADMIN_USERNAME || !ADMIN_PASSWORD_HASH) {
  console.log(
    "\n❌ ADMIN_USERNAME or ADMIN_PASSWORD_HASH is missing/empty in .env.local.\n"
  );
  process.exit(1);
}

console.log("\n--- Comparing against what you typed ---");
console.log("Username match:", username === ADMIN_USERNAME);

bcrypt.compare(password, ADMIN_PASSWORD_HASH).then((passwordMatch) => {
  console.log("Password match:", passwordMatch);

  if (username === ADMIN_USERNAME && passwordMatch) {
    console.log("\n✅ These credentials WOULD log in successfully.\n");
  } else {
    console.log(
      "\n❌ These credentials would NOT log in. Fix the mismatched value(s) above.\n"
    );
  }
});