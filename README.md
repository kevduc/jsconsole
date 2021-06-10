# jsconsole

👨‍💻 Basic js console in js, _jsception_

👉 Try it here: [kevduc.github.io/jsconsole](https://kevduc.github.io/jsconsole)

## 🎯 Goal of this mini-project

✍ Practice JavaScript:

- Classes (definition, constructor, methods, composition)
- ES6 Modules (import, export)

## 👇 Examples

### You can do fun things like accessing the jsconsole from within itself:

<img style="max-width:70ch" src="https://user-images.githubusercontent.com/64347790/121444356-45939580-c987-11eb-9434-b63ff28e9e59.png" />

### The possibilities are unlimited 🧙‍♂️

Try executing this code in the jsconsole:

```txt
const consoleElement = document.querySelector('#console'); let {x, y} = consoleElement.getBoundingClientRect(); const updateConsolePosition = (x, y) => { consoleElement.style.top = `${y}px`; consoleElement.style.left = `${x}px` }; updateConsolePosition(x, y); consoleElement.style.position = "absolute"; const movementSpeed = 10; let key = ''; jsconsole.input.addEventListener("keydown", (e) => key = e.key); jsconsole.input.addEventListener("keyup", (e) => key = ""); setInterval(() => { switch(key) { case "w": { y -= movementSpeed; break; } case "s": { y += movementSpeed; break; } case "a": { x -= movementSpeed; break; } case "d": { x += movementSpeed; break; } default: break; } updateConsolePosition(x, y); }, 17); jsconsole.clear(); "Use the WASD keys to control the jsconsole!"
```

### 🕹 Have fun!
