<template>
    <div id="skel-block-left">
        <div id="skel-top-left">
            <img src="./../../assets/img/spinner.gif" alt="">
            <ul>
                <li v-for="(i, ind) in 6" :key="ind">

                </li>
            </ul>
        </div>
        <div id="skel-central-left">
            <div class="skel-info-post">
                <div class="skel-img">

                </div>
                <div class="skel-auth">

                </div>
            </div>
            <div class="skel-post">

            </div>
        </div>
        
    </div>
    <div id="skel-block-right">
        <Profile/>
        <div id="skel-container-suggestion">
            <div id="skel-sug-seeAll">
                <span>
                    <b>Suggerimenti per te</b>
                </span>
                <span>
                    <b>Mostra tutti</b>
                </span>
            </div>
            <ul>
                <li v-for="(elem, index) in 10" :key="index">
                    <div>
                        <div class="skel-img">
                            
                        </div>
                        <div class="skel-username"></div>
                    </div>
                    <span class="skel-follow">
                        <b>Segui</b>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Profile from './right-side/Profile.vue'
import Footer from './right-side/Footer.vue'
export default {
    components: {
        Profile,
        Footer
    },
}
</script>