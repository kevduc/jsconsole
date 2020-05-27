export default class TextInput {
  constructor(HTMLElement) {
    this.HTMLElement = HTMLElement;
    this.resolve = () => {};
    this.HTMLElement.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.resolve(HTMLElement.value);
    });
  }

  async read() {
    return new Promise((resolve, reject) => {
      this.resolve = resolve;
    });
  }

  clear() {
    this.HTMLElement.value = "";
  }
}
