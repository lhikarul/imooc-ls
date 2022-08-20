module.exports = function parse() {
  let isAll = false; // -a
  let isList = false; // -l
  let isDevelopment = false; // -D

  const args = process.argv.slice(2);

  args.forEach((arg) => {
    if (arg.indexOf("a") >= 0) {
      isAll = true;
    }
    if (arg.indexOf("l") >= 0) {
      isList = true;
    }
    if (arg.indexOf("D") >= 0) {
      isDevelopment = true;
    }
  });

  return {
    args,
    isAll,
    isList,
    isDevelopment,
  };
};
