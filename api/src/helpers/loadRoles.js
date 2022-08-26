const { Role } = require("../db.js");

const loadRoles = async () => {
  await Role.bulkCreate([
    { code: "D", name: "Customer" },
    { code: "C", name: "Employee" },
    { code: "B", name: "Admin Employee" },
    { code: "A", name: "Admin" },
  ]);
};

module.exports = loadRoles;
