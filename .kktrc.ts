import path from 'path';
import webpack, { Configuration } from 'webpack';
import { LoaderConfOptions } from 'kkt';
import lessModules from '@kkt/less-modules';
import rawModules from '@kkt/raw-modules';
import scopePluginOptions from '@kkt/scope-plugin-options';
import pkg from './package.json';

export default (conf: Configuration, env: string, options: LoaderConfOptions) => {
  conf = rawModules(conf, env, { ...options });
  conf = scopePluginOptions(conf, env, {
    ...options,
    allowedFiles: [
      path.resolve(process.cwd(), 'README.md')
    ]
  });
  conf = lessModules(conf, env, options);
  // Get the project version.
  conf.plugins!.push(new webpack.DefinePlugin({
    VERSION: JSON.stringify(pkg.version),
  }));
  conf.optimization = {
    ...conf.optimization,
    splitChunks: {
      cacheGroups: {
        reactvendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react-vendor',
          chunks: 'all',
        },
        katex: {
          test: /[\\/]node_modules[\\/](katex)[\\/]/,
          name: 'katex-vendor',
          chunks: 'all',
        },
        micromark: {
          test: /[\\/]node_modules[\\/](micromark)[\\/]/,
          name: 'micromark-vendor',
          chunks: 'all',
        },
        prismjs: {
          test: /[\\/]node_modules[\\/](prismjs)[\\/]/,
          name: 'prismjs-vendor',
          chunks: 'async',
        },
      },
    },
  };
  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
  }
  return conf;
}
