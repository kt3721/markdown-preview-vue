const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'production',

    entry: path.resolve('./src/index.js'),
    output: {
        path: path.resolve('./dist'),
        filename: 'index.js',
        libraryTarget: 'umd', // 打包成 umd 库格式
    },

    // 模块
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除 不需要 处理的 文件
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: 'defaults' }]
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    // 插件
    plugins: [
        new VueLoaderPlugin()
    ],
    
    optimization: {
        usedExports: true
    }
}
