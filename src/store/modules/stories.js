const state = {
    stories: null,
    singleStory: []
}

const getters = {
    getStories: state => state.stories,
    getSingleStory: state => state.singleStory
}

const mutations = {
    pushData: (state, data) => {
        state.stories = data
    }
}

const actions = {
    getPushData: (context, data) => {
        context.commit('pushData', data)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}