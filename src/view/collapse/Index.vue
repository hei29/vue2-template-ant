<template>
    <div class="page-content">
        <div class="collapse">
            <a-collapse defaultActiveKey="1">
                <a-collapse-panel key="1" header="一级菜单">
                    <a-collapse>
                        <a-collapse-panel key="3" header="二级菜单">
                            <p>菜单信息</p>
                        </a-collapse-panel>
                        <a-collapse-panel key="4" header="二级菜单">
                            <p>菜单信息</p>
                        </a-collapse-panel>
                    </a-collapse>
                </a-collapse-panel>
                <a-collapse-panel key="2" header="一级菜单">
                    <p>菜单信息</p>
                </a-collapse-panel>
            </a-collapse>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

    export default {
        name: 'Index',
        components: {  },
        data() {
            return {

            }
        },
        computed: {
        },
        methods: {
            
        }
    }
</script>

<style scoped lang="less">
    .page-content {
        display: flex;

        .collapse {
        width: 500px;
        margin: auto;
        // justify-content: center;

        :deep(.ant-collapse) {

            .ant-collapse-item {

                .ant-collapse-content {
                    
                    .ant-collapse-content-box {
                        padding: 0;

                        p {
                            margin-bottom: 0;
                            padding: 12px;
                        }
                    }
                }

                .ant-collapse {
                    margin-left: 10px;
                    border: 0;
                    .ant-collapse-item {
    
                        &:last-child {
                            border-bottom: 0;
                        }
                        .ant-collapse-header {
                            height: 34px;
                            line-height: 34px;
                            padding: 0 16px
                        }
                    }
                }

            }
        }
    }
    }
    
</style>