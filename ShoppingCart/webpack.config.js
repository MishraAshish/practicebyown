let path = require("path"),
DIST_DIR = path.resolve(__dirname,"dist"),
SRC_DIR = path.resolve(__dirname,"src");


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
                test:/\.css$/,
                include:SRC_DIR,
                use:['style-loader','css-loader']
            }
        ]
    }//,// Generate source map files
    // devServer: {
    //     historyApiFallback: true,
    //   },
	//devtool: "source-map"
}

module.exports = webpackConfig;