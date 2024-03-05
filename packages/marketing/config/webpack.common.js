module.exports = {
    module: {
        rules: [
            // here we're gonna define what is called a loader 

            // Babel: is going to process all of your code from ES 2015, 16, 17, 18, 19 , 20 and turn into regular ES Five Code 
            // that can be easily executed inside of a typical browser 
            {
                test: /\.m?js$/, // mjs that we want to be proecess by babel 
                exclude: /node_modules/, // that means: do not try to run this babel thing or any file out of your node_modules directory  
                use: {
                    loader: 'babel-loader',
                    options: {
                        // @babel/preset-react: means that Babel is gonna process all the different jsx tags (react related code) 
                        // @babel/preset-env: convert to ES Five
                        presets: ['@babel/preset-react','@babel/preset-env'],
                        // @babel/plugin-transform-runtime: is going to add in a little bit of additional code just to enable different features for our project inside the browser 
                        // such as async await syntax and some other related things 
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}