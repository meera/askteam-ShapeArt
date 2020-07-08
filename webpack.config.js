const autoprefixer = require('autoprefixer');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    var config = {
        entry: './src/editor.js',

        output: {
            filename: 'editor.js'
        },
        mode: 'development',
        devtool: argv.mode === 'development'? 'cheap-module-source-map': 'source-map',
        optimization: {
            minimizer: [
                new TerserPlugin({sourceMap: true}),
                new OptimizeCssAssetsPlugin({
                    cssProcessorOptions: {
                        inline: false,
                        annotation: true
                    }
                })
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCSSExtractPlugin({
                filename: 'bundle.css'
            })
        ], 
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                '@babel/preset-react',
                                {
                                    "pragma": "wp.element.createElement",
                                    "pragmaFrag": "wp.element.Fragment",
                                    "development": argv.mode === 'development' ? true: false,
                                }
                                ]
                            ]                    
                            
                            }
                }
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        MiniCSSExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    autoprefixer()
                                ] 
                            }
                        },
                        
                        'sass-loader'
                    ]
                }
            ]
        },
        externals: {
            jquery :  "jQuery",
            "@wordpress/blocks": ["wp", "blocks"],
            "@wordpress/i18n": ["wp", "i18n"],
            "@wordpress/editor": ["wp", "editor"],
            "@wordpress/components": ["wp", "components"],
            "@wordpress/block-editor": ["wp", "blockEditor"],
            "@wordpress/element": ["wp", "element"]


        }
    };
    return config;
}