
const password = process.env.PASSWORD;

const { Client } = require('pg');

const client = new Client(`postgres://postgres:${password}@localhost/juiceboxdev`
);

module.exports = {
  client,
}

async function getAllUsers() {
  const { rows } = await client.query(
    `SELECT id, username 
    FROM users;
  `);

  return rows;
}

// and export them
module.exports = {
  client,
  getAllUsers,
}