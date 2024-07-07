const { globSync } = require('glob');
const { marked } = require('marked');
const { readFileSync } = require('fs');
const { basename, parse } = require('path');

class MarkdownCompiler {
    static defaultOptions = {
        pattern: '**/*.md',
        outputPath: './markdown/'
    }

    constructor(options = {}) {
        this.options = { ...MarkdownCompiler.defaultOptions, ...options };
    }

    apply(compiler) {
        const pluginName = MarkdownCompiler.name;
        const { webpack } = compiler;
        const { Compilation } = webpack;
        const { RawSource } = webpack.sources;

        compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
            compilation.hooks.processAssets.tap({
                name: pluginName,
                stage: Compilation.PROCESS_ACCESS_STAGE_SUMMARIZE,
            },
                (_) => {
                    const files = globSync(this.options.pattern);
                    for (const file of files) {
                        const filename = parse(basename(file)).name;
                        const outputFile = `${this.options.outputPath}${filename}.html`
                        console.log(`Compiling ${file} to ${outputFile}`);

                        const data = readFileSync(file);
                        let compiledData = marked.parse(data.toString('utf8'));

                        if (this.options.template != undefined) {
                            const templateData = readFileSync(this.options.template).toString('utf8');
                            compiledData = templateData.replace('{{SLOT}}', compiledData);
                        }

                        compilation.emitAsset(outputFile, new RawSource(compiledData));
                    }
                }
            );
        })

    }
}

module.exports = { MarkdownCompiler };
