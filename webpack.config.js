//entry point - > output
const path = require('path')
module.exports = { 
    entry: './src/app.js',
    output: {
        path:path.join(__dirname, 'public') ,//it has to be absolute path
        filename: 'bundle.js'
    }
};