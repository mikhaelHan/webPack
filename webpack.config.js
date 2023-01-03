const path = require('path');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
	mode = 'production';
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
	mode: mode,
	entry: path.resolve(__dirname, 'src', 'main', 'index.js'),
	output: {
		filename: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'main', 'index.html')
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		})
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
};
