const fs = require("fs");
module.exports = function auth(mode) {
  let authString = "";
  // user
  const canUserRead = mode & fs.constants.S_IRUSR;
  const canUserWrtie = mode & fs.constants.S_IWUSR;
  const canUserExecute = mode & fs.constants.S_IXUSR;

  // group
  const canGroupRead = mode & fs.constants.S_IRGRP;
  const canGroupWrtie = mode & fs.constants.S_IWGRP;
  const canGroupExecute = mode & fs.constants.S_IXGRP;

  // other
  const canOtherRead = mode & fs.constants.S_IROTH;
  const canOtherWrtie = mode & fs.constants.S_IWOTH;
  const canOtherExecute = mode & fs.constants.S_IXOTH;

  canUserRead ? (authString += "r") : (authString += "-");
  canUserWrtie ? (authString += "w") : (authString += "-");
  canUserExecute ? (authString += "x") : (authString += "-");

  canGroupRead ? (authString += "r") : (authString += "-");
  canGroupWrtie ? (authString += "w") : (authString += "-");
  canGroupExecute ? (authString += "x") : (authString += "-");

  canOtherRead ? (authString += "r") : (authString += "-");
  canOtherWrtie ? (authString += "w") : (authString += "-");
  canOtherExecute ? (authString += "x") : (authString += "-");

  return authString;
};
