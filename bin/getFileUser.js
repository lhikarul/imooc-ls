const cp = require("child_process");

module.exports = function getFileUser(stat) {
  const { uid, gid } = stat;
  const username = cp
    .execSync("id -un " + uid)
    .toString()
    .trim();
  const groupIdsStr = cp
    .execSync("id -G " + uid)
    .toString()
    .trim();
  const groupIds = groupIdsStr.split(" ");
  const groupdIdsNameStr = cp
    .execSync("id -Gn " + uid)
    .toString()
    .trim();
  const groupIdsName = groupdIdsNameStr.split(" ");
  const index = groupIds.findIndex((id) => +id === +gid);
  const groupName = groupIdsName[index];
  return username + " " + groupName;
};
