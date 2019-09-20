import { GluegunToolbox } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
    const {
        template: { generate },
        print: { success, error }
    } = toolbox

    async function createController(name) {
        if (!name) return error('Controller name not specified')

        const methodName = name[0].toUpperCase() + name.slice(1)  
        const folderName = name[0].toLowerCase() + name.slice(1)

        const target = `src/core/${folderName}/controller.js`

        await generate({
            template: 'controller.ts.ejs',
            target,
            props: { name: methodName }
        })

        success(`Created ${target}`)
    }
    toolbox.createController = createController
}