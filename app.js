const app = require("./src");
const DB_CONNECT = require("./src/db/connect");
const PORT = process.env.DEFAULT_SERVER_PORT || 3000;

const server = app.listen(PORT, async () => {
  await DB_CONNECT();
  console.log(`Listening on port ${PORT}...`);
});

module.exports = server;
