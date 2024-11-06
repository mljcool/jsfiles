const fs = require("fs-extra");
const concat = require("concat");

(async () => {
  try {
    const files = [
      "./dist/runtime.js",
      "./dist/polyfills.js",
      "./dist/main.js",
    ];
    const exist = fs.existsSync("element");
    if (exist) {
      fs.removeSync("element");
    }
    await fs.ensureDir("element");
    await concat(
      files,
      "../hso-tt-ms-srm---hso-ms-srm/web-files/Element.js"
    );
    await concat(
      files,
      "./element/Element.js"
    );
    await concat(
      files,
      "../expirements/Element.js"
    );
  } catch (error) {
    console.error(error);
  }
})();
