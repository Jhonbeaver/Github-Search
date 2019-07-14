module.exports = {
  chainWebpack: (config) => {
    config.entry('app').clear();
    config.entry('app').add('./src/main.js');
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "./src/assets/style.sass"; @import "./src/assets/spinner.sass";',
      },
    },
  },
};
