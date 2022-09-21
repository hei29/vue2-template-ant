
// 使用方法
// this.$store.state.模块名.state名
// this.$store.getters['模块名/state名']
// this.$store.mutations('模块名/mutations名', val)
// this.$store.actions('模块名/actions名', val)
// 使用辅助函数
// ...mapState('模块名',['state名']), ...mapState('模块名',{重命名: 'state名'})
// ...mapMutations('模块名',['mutations名']), ...mapMutations('模块名',{重命名: 'mutations名'})
// ...mapActions('模块名',['actions名']), ...mapActions('模块名',{重命名: 'actions名'})
// ...mapState('模块名',['state名']), ...mapState('模块名',{重命名: 'state名'})
const modA = {
    namespaced: true,
    state: {
        modFile: 'A'
    },
    mutations: {
        changeModFile(state,val) {
            state.modFile = 'B'
        }
    },
    actions: {

    },
    getters: {

    }
}

export default modA