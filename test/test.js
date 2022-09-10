const assert = require("assert");
const parseArgs = require("../bin/parseArgs");
const getFileUser = require("../bin/getFileUser");
const getFileType = require("../bin/getFileType");

describe("imooc-ls", function () {
  describe("parseArgs", function () {
    it("args test", function () {
      const { args, isList, isAll } = parseArgs();
      assert.equal(isList, false);
      assert.equal(isAll, false);
      assert.equal(args.length, 1);
    });
  });

  describe("getFileUser", function () {
    it("get current user", function () {
      const stat1 = { uid: 501, gid: 20 };
      const user1 = getFileUser(stat1);
      assert.equal(user1, "evans staff");
    });

    it("get root user", function () {
      const stat2 = { uid: 0, gid: 0 };

      const user2 = getFileUser(stat2);

      assert.equal(user2, "root wheel");
    });
  });

  describe("getFileType", function () {
    it("is file", function () {
      getFileType();
    });
  });
});
