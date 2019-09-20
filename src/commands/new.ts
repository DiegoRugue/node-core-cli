import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'new',
  description: 'api name\ncontroller (c) name\nrepository (r) name\n',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters: { first, second },
      print: { error },
      createController
    } = toolbox

    if (!first) return error('Parameter not specified use --help for more information')

    switch (first) {
        case 'controller':
        case 'c':
            createController(second)
            break;
    
        default:
            break;
    }
  }
}
