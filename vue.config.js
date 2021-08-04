// vue.config.js
module.exports = {
   css: {
      loaderOptions: {
         sass: {
            prependData: `
            @import '@/assets/scss/_planet.scss';
            @import '@/assets/scss/_variables.scss';
            `,
         },
      },
   },
}
