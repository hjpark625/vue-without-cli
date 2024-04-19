const express = require('express')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const app = express()

const distPath = path.join(__dirname, 'dist')
const indexHtmlPath = path.join(distPath, 'index.html')

if (!fs.existsSync(distPath) || !fs.existsSync(indexHtmlPath)) {
  console.error(
    chalk.red(
      `The ${chalk.yellow('dist')} folder or ${chalk.yellow('index.html')} doesn't exist.\nPlease run ${chalk.blue('pnpm run build')} first.\n`
    )
  )
  process.exit(1)
}

app.use(express.static(distPath))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(distPath, 'index.html'))
})

app.listen(3000, () => {
  console.log(chalk.green(`Server is running on port ${chalk.blue('3000')}`))
})
