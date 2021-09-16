<template>
    <div id="container-suggestion">
        <div id="sug-seeAll">
            <span>
                <b>Suggerimenti per te</b>
            </span>
            <span>
                <b>Mostra tutti</b>
            </span>
        </div>
        <ul>
            <li v-for="(elem, index) in getStories" :key="index">
                <div>
                    <img :src="elem.profile_picture" :alt="elem.profile_name">
                    <span>
                        <b>{{elem.profile_name}}</b>
                    </span>
                </div>
                <span class="follow">
                    <b>Segui</b>
                </span>
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
}
</script>