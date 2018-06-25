module.exports = options => {
    return {
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
        },
        mode: 'development',
        module: {
            rules: [
                {
                    test: /.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                }
            ]
        }
    }
}