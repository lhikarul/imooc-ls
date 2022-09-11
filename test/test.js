const assert = require("assert");
const parseArgs = require("../bin/parseArgs");
const getFileUser = require("../bin/getFileUser");
const getFileType = require("../bin/getFileType");
const getAuth = require("../bin/auth");

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
      const mode = 32768;
      const res = getFileType(mode);
      assert.equal(res, "-");
    });
    it("is directory", function () {
      const mode = 16384; // dir
      const res = getFileType(mode);
      assert.equal(res, "d");
    });
    it("is link", function () {
      const mode = 40960; // link
      const res = getFileType(mode);
      assert.equal(res, "l");
    });
    it("block device", function () {
      const mode = 24576; // block device
      const res = getFileType(mode);
      assert.equal(res, "d");
    });
  });

  describe("getAuth", function () {
    it("user rwx------", function () {
      const mode = 4544; // user rwx
      const str = getAuth(mode);
      assert.equal(str, "rwx------");
    });
    it("group ---rwx---", function () {
      const mode = 4152; // user rwx
      const str = getAuth(mode);
      assert.equal(str, "---rwx---");
    });
    it("other ------rwx", function () {
      const mode = 4103;
      const str = getAuth(mode);
      assert.equal(str, "------rwx");
    });
    it("none ------", function () {
      const mode = 4096; // empty
      const str = getAuth(mode);
      assert.equal(str, "---------");
    });
    it("bad mode 0", function () {
      const mode = 0; // empty
      const str = getAuth(mode);
      assert.equal(str, "---------");
    });
    it("bad mode string", function () {
      const mode = "0"; // empty
      const str = getAuth(mode);
      assert.equal(str, "---------");
    });
  });
});
