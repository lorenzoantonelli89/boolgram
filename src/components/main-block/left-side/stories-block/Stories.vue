<template>
    <div id="container-stories">
        <ul id="slider-stories">
          <li>
            <i class="fas fa-chevron-left" @click="scrollLeft()"></i>
          </li>
            <li>
                <ul id="container-stories-scroll"> 
                  <li v-for="(elem, index) in getStories" :key="index" class="stories">
                    <div>
                      <img :src="elem.profile_picture" :alt="elem.profile_name">
                      <span>
                          {{elem.profile_name}}
                      </span>
                    </div>
                  </li>
                </ul>
            </li>
            <li>
              <i class="fas fa-chevron-right" @click="scrollRight()"></i>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex' 

export default {
  computed: {
    ...mapGetters({
      getStories: 'stories/getStories',
    })
  },
  methods: {
    scrollRight: function(){
      const container = document.querySelector('#container-stories-scroll');
      container.scrollLeft = 115;
    },
    scrollLeft: function(){
      const container = document.querySelector('#container-stories-scroll');
      container.scrollLeft = -115;
    }
  }
}
</script>