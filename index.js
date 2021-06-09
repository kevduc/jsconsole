import Console from './Console/Console.js'

let myConsole = null
let commandHistory = ['']
let commandHistoryCursor = 0

document.addEventListener('DOMContentLoaded', async () => {
  const inputElement = document.querySelector('#input-text')
  const outputElement = document.querySelector('#output-text')

  myConsole = new Console(inputElement, outputElement)
  // myConsole.write("Hello World\n");
  // myConsole.input.addEventListener("newline", (e) => console.debug(e.line));

  myConsole.input.addEventListener('input', (e) => {
    commandHistoryCursor = commandHistory.length - 1
  })

  myConsole.input.addEventListener('keyup', (e) => {
    if (e.key == 'c' && e.ctrlKey) {
      // Ctrl + C
      commandHistoryCursor = commandHistory.length - 1
      commandHistory[commandHistoryCursor] = ''
      myConsole.input.set(commandHistory[commandHistoryCursor])
    }

    // Up and Down arrow keys to navigate command history
    if (commandHistory.length == 1) return

    let direction = new Map([
      ['ArrowUp', -1],
      ['ArrowDown', 1],
    ]).get(e.key)

    if (direction === undefined) return

    if ((commandHistoryCursor == 0 && direction == -1) || (commandHistoryCursor == commandHistory.length - 1 && direction == 1))
      return

    if (commandHistoryCursor == commandHistory.length - 1) commandHistory[commandHistoryCursor] = myConsole.input.get()

    commandHistoryCursor += direction
    myConsole.input.set('') // move cursor to the end
    myConsole.input.set(commandHistory[commandHistoryCursor])
  })

  await run()
})

async function run() {
  while (true) {
    let command = await myConsole.read()

    commandHistory[commandHistory.length - 1] = command
    commandHistory.push('')
    commandHistoryCursor = commandHistory.length - 1
    myConsole.write(`> ${command}\n`)

    switch (command) {
      case '':
        break
      case 'clear':
        myConsole.clear()
        break
      default:
        try {
          myConsole.write(`${eval(command)}\n`)
        } catch (err) {
          myConsole.write(`${err}\n`)
          // myConsole.write(`Err: Command '${command}' not recognized.\n`);
        }
        break
    }
  }
}
