const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html模板插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    resolve: {
        extensions: ['.vue', '.js', '.css'], //增加这一行，还可以自行添加需要的
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@':path.resolve('src'),
        }
    },
    devServer:{
        contentBase:'./dist',//服务的根目录
        inline:true, //实时更新
    },
    module: {
        rules: [
            //url-loader
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    
                    options: {
                        limit: 8192,
                        esModule: false,
                    }
                }],
            },
            //vue-loader
            {
                test: /\.vue$/,
                use: ['vue-loader'],
            },
            //css-loader
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'index.html'
        }),
        new VueLoaderPlugin()
    ]
}