import store from '../store'

let loadingCount = 0

export const openLoading = () => {
    if (loadingCount === 0) {
        store.commit('changePageLoading', true)
    }
    loadingCount++
}

export const closeLoading = () => {
    if (loadingCount <= 0) return
    loadingCount--
    if (loadingCount === 0) {
        store.commit('changePageLoading', false)
    }
}