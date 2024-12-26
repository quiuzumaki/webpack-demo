const PLUGIN = {
    name: "BShieldCompilerPlugin",
};

class BShieldCompilerPlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        this.assetName = "home.bundle.js"
        compiler.hooks.afterEmit.tapAsync(
            PLUGIN.name,
            (compilation, parms) => {
                Object.keys(compilation.assets).forEach((filename) => {
                    const absolutePath = compiler.outputPath + '/' + filename;
                    console.log(`Absolute path for ${filename}: ${absolutePath}`)
                })
            }
        );
    }
}

module.exports = BShieldCompilerPlugin;
