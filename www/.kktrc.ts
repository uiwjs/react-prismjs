import webpack from 'webpack';
import { LoaderConfOptions, WebpackConfiguration } from 'kkt';
import { mdCodeModulesLoader } from 'markdown-react-code-preview-loader';
import { disableScopePlugin } from '@kkt/scope-plugin-options';
import pkg from '@uiw/react-prismjs/package.json';

export default (conf: WebpackConfiguration, env: string, options: LoaderConfOptions) => {
  conf = mdCodeModulesLoader(conf);
  conf = disableScopePlugin(conf);
  // Get the project version.
  conf.plugins!.push(new webpack.DefinePlugin({
    VERSION: JSON.stringify(pkg.version),
  }));
  // https://github.com/kktjs/kkt/issues/336#issue-1097660932
  conf.module!.exprContextCritical = false;
  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
    conf.optimization = {
      ...conf.optimization,
      splitChunks: {
        cacheGroups: {
          reactvendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react-vendor',
            chunks: 'all',
          },
          prismjs: {
            test: /[\\/]node_modules[\\/](prismjs)[\\/]/,
            name: 'prismjs-vendor',
            chunks: 'all',
          },
          micromark: {
            test: /[\\/]node_modules[\\/](micromark)[\\/]/,
            name: 'micromark-vendor',
            chunks: 'all',
          },
          uiw: {
            test: /[\\/]node_modules[\\/](\@uiw)[\\/]/,
            name: 'uiw-vendor',
            chunks: 'all',
          },
          parse5: {
            test: /[\\/]node_modules[\\/](parse5)[\\/]/,
            name: 'parse5-vendor',
            chunks: 'all',
          },
        },
      },
    };
  }
  return conf;
}
