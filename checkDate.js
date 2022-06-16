const { json } = require("express");

const checkDate = (req, res, next) => {
  const currentDate = new Date().getDay();

  //days between 1 and 5 are work days
  if (currentDate >= 1 && currentDate <= 5) next();
  else {
    res.status(401).json({ msg: "cannot access this app outside work days !" });
  }
};

module.exports = {
  checkDate,
};
