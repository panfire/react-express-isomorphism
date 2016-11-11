import webpack from 'webpack'
import webpackProdConfig from './webpack.prod.config'

process.env.NODE_ENV = 'production'

webpack(webpackProdConfig).run((error, stats) => {
  if (error) { // so a fatal error occurred. Stop here.
    console.log(error);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalkWarning('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(warning));
  }

  // if we got this far, the build succeeded.
  console.log('Your app is compiled in production mode in /dist. It\'s ready to roll!');

  return 0;
});

