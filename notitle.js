const readline = require("readline");
const clipboardy = require("clipboardy");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Lets build a title, Type in a string: ", usertext => {
  const headerFooter = "".concat(
    "*****" + "*".repeat(usertext.length) + "*****"
  );
  const titleLine = "".concat("**** " + usertext + " ****");
  const combinedText =
    headerFooter + "\n" + titleLine + "\n" + headerFooter + "\n\n";
  clipboardy.writeSync(combinedText);
  console.log(
    `${combinedText} copied to clipboard. You may now close this window`
  );

  rl.close();
});
