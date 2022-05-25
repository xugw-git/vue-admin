export default {
    state: {
        barMark: true,
        lineMark: true,
        dynamicMark: true
    },
    mutations: {
        SetBarMarkTrue(state) {
            state.barMark = true
        },
        SetBarMarkFalse(state) {
            state.barMark = false
        },
        SetLineMarkTrue(state) {
            state.lineMark = true
        },
        SetLineMarkFalse(state) {
            state.lineMark = false
        },
        SetDynamicMarkTrue(state) {
            state.dynamicMark = true
        },
        SetDynamicMarkFalse(state) {
            state.dynamicMark = false
        },
    }
}