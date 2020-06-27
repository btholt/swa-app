const dogs = require("dog-breeds");

module.exports = async function (context) {
  context.res = {
    body: dogs.random(),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
