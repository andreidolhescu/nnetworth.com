<template>
  <div class="hello">
    <sidebar></sidebar>
    <div id="wrapper">
      <Intro></Intro>
      <Works></Works>
      <Security></Security>
      <Faq></Faq>
      <LoginSignup></LoginSignup>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import sidebar from './base/sidebar.vue'

import Faq from './HomeComponents/Faq.vue'
import Intro from './HomeComponents/Intro.vue'
import Security from './HomeComponents/Security.vue'
import Works from './HomeComponents/Works.vue'
import LoginSignup from './HomeComponents/LoginSignup.vue'
import Footer from './HomeComponents/Footer.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    sidebar,
    Intro,
    Faq,
    Security,
    Works,
    Footer,
    LoginSignup
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
