export default {
    state: {
        isLargeScreen: true
    },
    mutations: {
        SetTrue(state) {
            state.isLargeScreen = true
        },
        SetFalse(state) {
            state.isLargeScreen = false
        }
    }
}