<template>
    <div id="all-like">
        <div id="top-like">
            <b>Mi piace</b>
            <i class="fas fa-times" @click="closeLikes()"></i>
        </div>
        <ul>
            <li v-for="(elem, index) in likes" :key="index">
                <div>
                    <img :src="elem.profile_picture" alt="">
                    <span>
                        <b>{{elem.username}}</b>
                    </span>
                </div>
                <button>
                    Follow
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['likes'],
    methods: {
        closeLikes: function(){
            this.$emit('closingLikes', false);
        }
    },
}

</script>