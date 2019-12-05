const path = require('path');

module.exports = {

    devtool: "source-map",
    entry: './source/main.ts',
    output: {
        filename: 'main.js',
        path: path.resolve('./Builds/'),
        sourceMapFilename: 'SourceMap/[name].map.js'
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }

}