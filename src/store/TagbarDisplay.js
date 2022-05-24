export default {
    state: {
        tagList: ['home'],
        currentTag: null
    },
    mutations: {
        SelectTag(state, tag) {
            state.currentTag = tag
        },
        CloseTag(state, tag) {
            if (tag !== 'home') {
                state.tagList.splice(state.tagList.indexOf(tag), 1);
            }
        },
        AddTag(state, tag) {
            if (state.tagList.findIndex(i => i === tag) === -1) {
                state.tagList.push(tag)
            }
        },
    }
}