const {defineConfig} = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config.module
          .rule("raw")
          .test(/\.(md|txt)$/)
          .use("raw-loader")
          .loader("raw-loader")
          .end();
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                                     @import "/src/style/var.scss";
                                `
            }
        }
    }
});
