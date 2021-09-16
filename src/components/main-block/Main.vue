<template>
    <div id="container-main" v-show="activeSkeleton == true">
      <Skeleton />
    </div>  
    <div id="container-main" v-show="activeSkeleton == false">
        <LeftBlock/>
        <RightBlock/>
    </div>
</template>

<script>
import LeftBlock from './left-side/LeftBlock.vue' 
import RightBlock from './right-side/RightBlock.vue' 
import Skeleton from './Skeleton.vue'

export default {
  components: {
    LeftBlock,
    RightBlock,
    Skeleton
  },
  data() {
    return {
    activeSkeleton: true
    }
  },
  mounted() {
    setTimeout(this.skeleton, 3000);  
  },
  methods: {
    skeleton: function(){
      this.activeSkeleton = false;
    }
  },
}
</script>