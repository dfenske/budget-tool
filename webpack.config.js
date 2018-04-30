var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        'budget-tool': __dirname + '/lib/index.js',
        'budget-tool.min': __dirname + '/lib/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('budget-tool.css'),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.min\.css$/,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: ['/node_modules/', '/tests/']
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({ use: ['css-loader', 'sass-loader'] })
            }
        ]
    }
};
