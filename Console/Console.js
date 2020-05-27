import TextInput from "./TextInput.js";
import TextOutput from "./TextOutput.js";

export default class Console {
  constructor(inputElement, outputElement) {
    this.input = new TextInput(inputElement);
    this.output = new TextOutput(outputElement);
    this.buffer = "";
  }

  refresh() {
    this.output.show(this.buffer);
    this.output.HTMLElement.closest(".scroll").scroll(
      0,
      this.output.HTMLElement.scrollHeight
    );
  }

  clear() {
    this.buffer = "";
    this.refresh();
  }

  write(str) {
    this.buffer += str;
    this.refresh();
  }

  async read() {
    let line = await this.input.read();
    this.input.clear();
    return line;
  }
}
