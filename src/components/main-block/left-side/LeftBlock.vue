<template>
    <div id="container-left">
        <Stories/>
        <Posts/>
    </div>
</template>

<script>
import Stories from './stories-block/Stories.vue' 
import Posts from './posts-block/Posts.vue' 

export default {
  components: {
    Stories,
    Posts
  },
}
</script>