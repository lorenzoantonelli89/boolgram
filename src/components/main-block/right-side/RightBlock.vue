<template>
    <div id="container-right">
        <Profile/>
        <Suggestions/>
        <Footer/>
    </div>
</template>

<script>
import Profile from './Profile.vue'
import Suggestions from './Suggestions.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Profile,
    Suggestions,
    Footer
  },
}
</script>