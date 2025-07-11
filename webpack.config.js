import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devtool: false,
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].bundle.js",
        publicPath: "/"
    },
    mode: process.env.NODE_ENV || "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false
        }
    },
    module: {
        unknownContextCritical: false,
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|jp2|webp|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]'
                }
            },
            {
                test: /\.(mov|mp4)$/,
                loader: 'file-loader',
                options: {
                    name: 'videos/[name].[ext]'
                }
            },
            {
                test: /\.zip$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'files/[name].[ext]'
                        },
                    },
                ]
            }
        
        ],
    },
    devServer: {
        historyApiFallback: true,
        static: path.join(__dirname, "src")
    },
    optimization: {
        runtimeChunk: 'single',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public/html", "index.html"),
            favicon: "./public/html/favicon.ico",
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: path.join(__dirname, "public/flapeeg/"), to: "game"},
                {from: path.join(__dirname, "public/html/googlee063acc64186947c.html"), to: ""},
                {from: path.join(__dirname, "public/locales"), to: "locales"}
            ]
        }),
    ]
};
