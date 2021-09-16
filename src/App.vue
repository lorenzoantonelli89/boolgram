<template>
  <Nav/>
  <Main/>
</template>

<script>
import axios from 'axios'
import Nav from './components/nav/NavBar.vue'
import Main from './components/main-block/Main.vue'
import { mapActions } from 'vuex' 

export default {
  name: 'App',
  components: {
    Nav,
    Main
  },
  methods: {
    ...mapActions({
      pushDataStoriesAction: 'stories/getPushData',
      pushDataPostsAction: 'posts/getPushData'
    })
  },
  mounted() {
    axios.get('https://flynn.boolean.careers/exercises/api/boolgram/profiles')
      .then(res => {
        this.pushDataStoriesAction(res.data);
      })
      .catch((error) =>{
        console.log(error);
      })

    axios.get('https://flynn.boolean.careers/exercises/api/boolgram/posts')
      .then(res => {
        this.pushDataPostsAction(res.data);
      })
      .catch((error) =>{
        console.log(error);
      })  
  },
}
</script>

<style lang="scss">
  @import 'assets/sass/app.scss';
</style>
