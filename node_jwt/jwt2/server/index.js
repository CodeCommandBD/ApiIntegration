const app = require("./app");
require("dotenv").config();
const PORT = process.env.PORT;
const dbconnected = require("./config/db.config");

// db connect
dbconnected();

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
