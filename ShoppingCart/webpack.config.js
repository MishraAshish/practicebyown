let path = require("path"),
DIST_DIR = path.resolve(__dirname,"dist"),
SRC_DIR = path.resolve(__dirname,"src"),
UglifyJsPlugin = require('uglifyjs-webpack-plugin');


let webpackConfig = {
    //entry point
    entry: SRC_DIR+"/index.js",
    //out put
    output:{
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath:"/app/"
    },    
    //loaders
    //presets
    //module configurations
    module:{
        rules:[
            {
                test:/\.js?/,
                include:SRC_DIR,
                loader: "babel-loader", 
                enforce: 'pre',
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test:/\.(css|gif|png|jpg|svg)$/,
                include:SRC_DIR,
                use:['style-loader','css-loader']
            },
            {
                include:SRC_DIR,
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                  'file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true, // webpack@1.x
                      disable: true, // webpack@2.x and newer
                    },
                  },
                ],
              }
        ]
    },//,// Generate source map files
    // devServer: {
    //     historyApiFallback: true,
    //   },
    //devtool: "source-map"
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //       new UglifyJsPlugin({
    //         include:SRC_DIR,
    //         test: /\.js(\?.*)?$/i,
    //       }),
    //     ],
    // }
}

module.exports = webpackConfig;