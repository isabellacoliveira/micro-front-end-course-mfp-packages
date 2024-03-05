// merge is a function that we can use to merge together two different webpack config objects 
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// we have to require our plugin at the top and then add it into our plugins array 
const ModuleFederationPlugin = require('./webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');

// development especific configuration
// we'll merge the devConfig into the Common configuration 
const devConfig = {
    mode: 'development', 
    devServer: {
        port: 8081, 
        historyApiFallback: {
            index: 'index.html'
        }
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }), 
        new HtmlWebpackPlugin({
            // name of our sub-project 
            name: 'marketing', 
            filename: 'remoteEntry.js', 
            exposes: {
                './MarketingApp': './src/bootstrap'
            }, 
            shared: {

            }
        })
    ]
}; 

// we're merging together 
module.exports = merge(commonConfig, devConfig)