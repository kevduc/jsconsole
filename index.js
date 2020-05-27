import Console from "./Console/Console.js";

var HTMLConsole = null;

document.addEventListener("DOMContentLoaded", async () => {
  const inputElement = document.querySelector("#input-text");
  const outputElement = document.querySelector("#output-text");

  HTMLConsole = new Console(inputElement, outputElement);
  HTMLConsole.write("Hello World\n");
  while (true) {
    let text = await HTMLConsole.read();
    HTMLConsole.write(`${text}\n`);
  }
});
