<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'
import Footer from './components/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="sass">
@import '@/assets/sass/_variables.sass'

body
  background-image: url('@/assets/images/wallpaper-overwatch2.jpg')
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  height: 100vh

*
  font-family: $font-main, sans-serif
  padding: 0
  margin: 0
  box-sizing: border-box

@media (max-height: 520px)
  body
    height: 300vh

@media (min-height: 521px) and (max-height: 800px)
  body
    height: 150vh
</style>
