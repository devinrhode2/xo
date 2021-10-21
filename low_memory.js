const {default: globby} = require('globby')
const {default: pMap} = require('pMap')
const {default: execa} = require('execa')

const fileList = await globby(['*.ts', '*.tsx'])

pMap(fileList, async (file) => {
  return await execa('yarn xo --fix ' + file)
  // maybe we can directly require/call cli?
  //   const cli = require('xo/cli.js')
  //   cli(file, {fix: true})
}, {concurrency: 5 })
