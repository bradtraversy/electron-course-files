const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { spawn } = require('child_process')

module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
			},
			{
				test: /\.jsx?$/,
				use: [{ loader: 'babel-loader', options: { presets: ["@babel/preset-env", "@babel/preset-react"], compact: false } }],
			},
			{
				test: /\.(jpe?g|png|gif)$/,
				use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: [
					{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' },
				],
			},
		],
	},
	target: 'electron-renderer',
	plugins: [
		new HtmlWebpackPlugin({ title: 'BugLogger' }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
	],
	devtool: 'cheap-source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		devMiddleware: {
			stats: {
				colors: true,
				chunks: false,
				children: false,
			}
		},
		onBeforeSetupMiddleware() {
			spawn('electron', ['.'], {
				shell: true,
				env: process.env,
				stdio: 'inherit',
			})
				.on('close', (code) => process.exit(0))
				.on('error', (spawnError) => console.error(spawnError))
		},
	},
}
