export default class TextInput {
  constructor(HTMLElement) {
    this.HTMLElement = HTMLElement;
    this.resolve = () => {};
    this.HTMLElement.form.addEventListener("submit", (e) => {
      e.preventDefault();
      let value = this.HTMLElement.value;
      this.resolve(value);
      this.HTMLElement.dispatchEvent(
        new CustomEvent("newline", { detail: value })
      );
    });
  }

  addEventListener(type, listener) {
    this.HTMLElement.addEventListener(type, (e) => {
      e.line = e.detail;
      listener(e);
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

  set(value) {
    this.HTMLElement.value = value;
  }

  get() {
    return this.HTMLElement.value;
  }
}
