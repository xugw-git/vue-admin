export default {
    state: {
        isCollapse: false
    },
    mutations: {
        HandleCollapse(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}