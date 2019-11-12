const path = require('path');

module.exports = {

    entry: './source/main.ts',
    output: {
        filename: 'main.js',
        path: path.resolve('./Builds/')
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