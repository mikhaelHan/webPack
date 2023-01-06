const path = require('path');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
	mode = 'production';
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
	mode: mode,
	entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'script.js')],
	output: {
		filename: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: 'bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		})
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(c|sa|sc)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('postcss-preset-env')],
							}
						}
					},
					'sass-loader'
				],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};
