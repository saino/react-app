var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry:[
		path.resolve(__dirname, "./src/index.js")
	],
	output:{
		path: path.resolve(__dirname, "./dist"),
		filename: "index.js"
	},
	module:{
		loaders:[
			{test: /\.jsx?$/, loaders:['babel-loader?presets[]=es2015,presets[]=react']},
			{test: /\.css$/, loaders:['style-loader','css-loader']},
			{test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
			{test: /\.svg/, loader: 'svg-url-loader'}
		]
	},
	plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE.ENV':"development"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}