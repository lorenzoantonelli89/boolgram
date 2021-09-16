const state = {
    posts: null,
    singlePost: []
}

const getters = {
    getPosts: state => state.posts,
    getSinglePost: state => state.singlePost
}

const mutations = {
    pushData: (state, data) => {
        state.posts = data
    },
    newComments: (state, ind, obj) => {
        state.posts[ind].comments.push(obj)
        console.log(state.posts[ind].comments);
    }
}

const actions = {
    getPushData: (context, data) => {
        context.commit('pushData', data)
    },
    pushNewComment: (context, ind, obj) => {
        context.commit('newComments', ind, obj)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}