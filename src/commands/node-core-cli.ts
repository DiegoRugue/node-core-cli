import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'node-core-cli',
  run: async (toolbox: GluegunToolbox) => {
    const { print } = toolbox

    print.info('Need some help? type ncc help')
  }
}
