const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath:"dist/"
    },
    mode: "none",
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                type: 'asset/resource',
                parser:{
                    dataUrlCondition: {
                        maxSize: 3 * 1024
                    }
                }
            },
            {
                test: /\.txt$/,
                type: 'asset/source'
            }
        ]
    }
}