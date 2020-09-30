/*
入口js
*/
import Vue from 'vue' 
import app from './App.vue'
import router from './router'

import './common/iconfont/iconfont.css'


// import VueAwesomeSwiper from 'vue-awesome-swiper'

// // import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'

// // import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'

// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({ 
    el: '#app', 
    render: h => h(app),
    router,
})