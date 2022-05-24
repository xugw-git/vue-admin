import Cookies from 'js-cookie'
export default {
    state: {
        token: ''
    },
    mutations: {
        SetToken(state, val) {
            state.token = val
            Cookies.set('token', val)
        },
        RemoveToken(state) {
            state.token = ''
            Cookies.remove('token')
        },
        GetToken(state) {
            state.token = state.token || Cookies.get('token')
        }
    }
}