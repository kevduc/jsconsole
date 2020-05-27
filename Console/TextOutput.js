export default class TextOutput {
  constructor(HTMLElement) {
    this.HTMLElement = HTMLElement;
  }

  show(txt) {
    this.HTMLElement.innerText = txt;
  }
}
