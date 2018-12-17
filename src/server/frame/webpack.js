const webpack = require('webpack');


function packTestFiles() {
  const webpackConfig = generateWebpackConfig();
  const compiler = webpack(webpackConfig);
  compiler.run((err, stats) => {
    // ...
  });
}

const testFileInnerName = 'framewatcherTestPack.js'
function generateWebpackConfig(entryList, ) {
  const webpackConfig = {
    mode: 'development',
    entry: {
      app: path.resolve(APP_PATH, 'artgl-test.ts'),
    },
    // devtool: 'source-map',
    output: {
      filename: testFileInnerName,
      path: BUILD_PATH
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
      rules: [{
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }]
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
    ]
  };
  return webpackConfig;
}
