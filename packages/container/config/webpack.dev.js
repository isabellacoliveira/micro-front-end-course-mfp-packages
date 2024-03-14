// merge is a function that we can use to merge together two different webpack config objects 
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

// development especific configuration
// we'll merge the devConfig into the Common configuration 
const devConfig = {
    mode: 'development', 
    devServer: {
        port: 8080, 
        historyApiFallback: {
            index: 'index.html'
        }
    }, 
    plugins: [
        new ModuleFederationPlugin({
            name: 'container', 
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            }, 
            shared: packageJson.dependencies,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}; 

// we're merging together 
module.exports = merge(commonConfig, devConfig)