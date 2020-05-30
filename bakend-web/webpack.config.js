module.exports = {
    entry : './src/app/index.js',
    output: {
        path : `${__dirname}/src/public`,
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx|css)$/,
            exclude: /node_modules/,
            use:[
              {loader: "babel-loader"}    
        ] 
          }
        ]
      }
    }