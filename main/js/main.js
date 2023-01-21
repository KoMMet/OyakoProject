// import Vue from 'Vue'
// import App from './vue/app.vue'
// import router from './router'
// import vuetify from './plugins/vuetify';

// Vue.config.productionTip = false

// new Vue({
//   router,
//   vuetify,
//   render: h => h(App)
// }).$mount('#app')


const app = Vue.createApp({
  data: () => ({
    drawer: null
  }),
  // vuetify: new Vuetify(),
})
app.mount('#app')