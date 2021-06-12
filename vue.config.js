module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "./src/assets/css/_Config.scss";`,
            }
        }
    }
}