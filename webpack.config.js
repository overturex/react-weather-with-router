module.exports = {
  entry:'./app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve:{
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Weather: 'app/components/Weather.jsx',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage.jsx',
      OpenWeatherMapService: 'app/services/OpenWeatherMapService.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['babel-preset-es2015', 'react']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules | bower_components)/
      }
    ]
  }
}
