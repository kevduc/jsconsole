import Console from './Console/Console.js'

let jsconsole = null
let commandHistory = ['']
let commandHistoryCursor = 0

document.addEventListener('DOMContentLoaded', async () => {
  const inputElement = document.querySelector('#input-text')
  const outputElement = document.querySelector('#output-text')

  jsconsole = new Console(inputElement, outputElement)
  // jsconsole.write("Hello World\n");
  // jsconsole.input.addEventListener("newline", (e) => console.debug(e.line));

  jsconsole.input.addEventListener('input', (e) => {
    commandHistoryCursor = commandHistory.length - 1
  })

  jsconsole.input.addEventListener('keyup', (e) => {
    if (e.key == 'c' && e.ctrlKey) {
      // Ctrl + C
      commandHistoryCursor = commandHistory.length - 1
      commandHistory[commandHistoryCursor] = ''
      jsconsole.input.set(commandHistory[commandHistoryCursor])
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

    if (commandHistoryCursor == commandHistory.length - 1) commandHistory[commandHistoryCursor] = jsconsole.input.get()

    commandHistoryCursor += direction
    jsconsole.input.set('') // move cursor to the end
    jsconsole.input.set(commandHistory[commandHistoryCursor])
  })

  await run()
})

async function run() {
  while (true) {
    let command = await jsconsole.read()

    commandHistory[commandHistory.length - 1] = command
    commandHistory.push('')
    commandHistoryCursor = commandHistory.length - 1
    jsconsole.write(`> ${command}\n`)

    switch (command) {
      case '':
        break
      case 'clear':
        jsconsole.clear()
        break
      default:
        try {
          jsconsole.write(`${eval(command)}\n`)
        } catch (err) {
          jsconsole.write(`${err}\n`)
          // jsconsole.write(`Err: Command '${command}' not recognized.\n`);
        }
        break
    }
  }
}
