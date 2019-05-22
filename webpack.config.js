//entry point - > output
const path = require('path')
module.exports = { 
    entry: './src/playground/redux-101.js',
    output: {
        path:path.join(__dirname, 'public') ,//it has to be absolute path
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        }]
    },
    devtool: 'cheap-module-eval-source-map', //sourceMap 
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};



//Loader let you customize the behavier 
// to install babel which translate to ES6 commands we have to install two 1 = babel core which is same as babel babel cli 
//2 = babel-loader is a webpack plugin to teach webpack to run babel files 
// then creat a file called .babelrc and define presets as in array inside json object
// and then define module that includes rules array with an object inside has three properties { loader , test, exclude }

/**
 * Source map allow us to debug the application and find error from chrome directly
 * 
 */

 /**
  * DevServer: 
  */