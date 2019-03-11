var path = require('path');

module.exports = {
    entry: './src/main/js/app.js',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module:{
        rules:[ ////https://webpack.js.org/configuration/module#rule-conditions
            {
                test: path.join(__dirname,'.'), //https://nodejs.org/api/path.html#path_path_join_paths
                exclude: /(node_modules)/,
                use: [ //https://webpack.js.org/configuration/module#ruleuse
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }]
            }
        ]
    }
}