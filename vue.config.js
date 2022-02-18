const {defineConfig} = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.module
          .rule('raw')
          .test(/\.(md|json|txt)$/)
          .use('raw-loader')
          .loader('raw-loader')
          .end()
    }
});
