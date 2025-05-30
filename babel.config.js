module.exports = function (api) {
  api.cache(true);
  const plugins = [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          constants: './src/constants/',
          routers: './src/routers/',
          scenes: './src/scenes/',
          utils: './src/utils/',
          appRedux: './src/appRedux/',
          helpers: './src/helpers/',
          hooks: './src/hooks/',
          services: './src/services/',
          configs: './src/configs/',
          components: './src/components/',
          assets: './src/assets/',
          model: './src/model/',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ];
  return {
    presets: ['module:@react-native/babel-preset'],
    env: {
      production: {
        plugins: plugins.concat('transform-remove-console'),
      },
      development: {
        plugins: plugins,
      },
    },
  };
};
