import Console from "./Console/Console.js";

let myConsole = null;

document.addEventListener("DOMContentLoaded", async () => {
  const inputElement = document.querySelector("#input-text");
  const outputElement = document.querySelector("#output-text");

  myConsole = new Console(inputElement, outputElement);
  myConsole.write("Hello World\n");
  // myConsole.input.addEventListener("data", (e) => console.log(e.data));
  await run();
});

async function run() {
  while (true) {
    let command = await myConsole.read();

    myConsole.write(`> ${command}\n`);

    switch (command) {
      case "":
        break;
      case "clear":
        myConsole.clear();
        break;
      default:
        try {
          myConsole.write(`${eval(command)}\n`);
        } catch (err) {
          myConsole.write(`${err}\n`);
          // myConsole.write(`Err: Command '${command}' not recognized.\n`);
        }
        break;
    }
  }
}
