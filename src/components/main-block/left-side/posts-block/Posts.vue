<template>
    <div id="container-post">
        <AllLike :likes="likes" v-show="activeLikes == true" @closingLikes="closingLikes"/>
        <div class="card-post" v-for="(elem, index) in getPosts" :key="index">
            <div class="top-post">
                <div>
                    <img :src="elem.profile_picture" :alt="elem.profile_name">
                    <span>
                        {{elem.profile_fullname}}
                    </span>
                </div>
                <i class="fas fa-ellipsis-h"></i>
            </div>
            <div class="img">
                <img :src="elem.post_image" alt="">
            </div>
            <div class="info-post">
                <div class="icon">
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                </div>
                <div class="like">
                    <img :src="elem.likes[0].profile_picture" alt="">
                    <span>
                        Piace a <b>{{elem.likes[0].username}}</b> e <b @click="seeAllLike(elem.likes)">{{elem.likes.length}} altri</b>
                    </span>
                </div>
                <div class="author">
                    <b>{{elem.profile_name}}</b> {{elem.post_text}}
                </div>
                <div class="comments" v-if="activeComments == false">
                    <ul>
                        <li id="see-all-comment" @click="seeAllComment()">
                            Mostra tutti e {{elem.comments.length}} commenti
                        </li>
                        <li v-for="(item, ind) in elem.comments.slice(-3)" :key="ind" >
                            <b>{{item.username}}</b> {{item.text}}
                        </li>
                    </ul>
                </div>
                <div class="comments" v-else>
                    <ul>
                        <li v-for="(item, ind) in elem.comments" :key="ind" >
                            <b>{{item.username}}</b> {{item.text}}
                        </li>
                    </ul>
                </div>
                <div class="add-comment">
                    <input type="text" placeholder="Aggiungi commento" v-model="comment.text">
                    <button @click="newComment(index)">
                        Pubblica
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex' 
import AllLike from './AllLike.vue'

export default {
  components: {
    AllLike
  },
  data() {
      return {
        comment: {
            username: 'jumbotron',
            text: null
        },
        activeLikes: false,
        likes: null,
        activeComments: false,
      }
  },
  methods: {
    ...mapActions({
        pushNewComment: 'posts/pushNewComment'
    }),
    ...mapMutations({
        newComments: 'posts/newComments'
    }),
    seeAllLike: function(arr){
        this.likes = arr
        this.activeLikes = true
    },
    seeAllComment: function(){
        this.activeComments = true
        console.log(this.activeComments)
    },
    newComment: function(ind){
        // this.comment.username = this.getProfile.username;
        this.getPosts[ind].comments.push(this.comment);
        this.comment = {
            username: 'jumbotron',
            text: null
        }
        // this.pushNewComment(ind, this.comment)
    },
    closingLikes: function(val){
        this.activeLikes = val;
    }
  },
  computed: {
    ...mapGetters({
      getPosts: 'posts/getPosts',
    })
  },
}
</script>