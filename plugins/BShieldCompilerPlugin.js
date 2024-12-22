

const PLUGIN = {
    name: "BShieldCompilerPlugin"
}

class BShieldCompilerPlugin {
    constructor(options) {
        this.options = options
    }

    apply(compiler) {
        const { webpack } = compiler;

        const { Compilation } = webpack;

        const { RawSource } = webpack.sources;


        compiler.hooks.compilation.tap(PLUGIN.name, (compilation) => {
            // Tapping to the assets processing pipeline on a specific stage.
            compilation.hooks.processAssets.tap(
                {
                    name: PLUGIN.name,
                    stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
                },
                (assets) => {
                    console.log('List of assets and their sizes:');
                    Object.entries(assets).forEach(([pathname, source]) => {
                        console.log(`— ${pathname}: ${source.size()} bytes`);
                    });
                }
            );
        });
    }
}

module.exports = BShieldCompilerPlugin