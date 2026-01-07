const path = require("path");

// register controller get
const registerControllerGet = (req, res) => {
   res.sendFile(path.join(__dirname, "../views", "register.html"));
};


module.exports = {
   registerControllerGet,
};