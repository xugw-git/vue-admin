<template>
    <div class="tag-group" style="background-color:#EEEEEE; padding-left: 20px;">
        <el-tag @close="closeTag(tag)" @click="selectTag(tag)" v-for="(tag, index) in tags" :key="index"
            :effect="tag === currentTag ? 'dark' : 'plain'" closable>
            {{ tag.split('_').length === 1 ? crumbTrans[tag] : crumbTrans[tag.split('_')[0]] + '-' + tag.split('_')[1]
            }}
        </el-tag>
    </div>
</template>

<script>
export default {
    data() {
        return {
            crumbTrans: { home: '首页', note: '便签', check: '审核', tool: '工具', export: '数据导出', upload: '数据导入' },
        }
    },
    computed: {
        tags() {
            return this.$store.state.HandleTag.tagList
        },
        currentTag() {
            return this.$store.state.HandleTag.currentTag
        },
    },
    methods: {
        closeTag(tag) {
            if (tag === this.currentTag & tag === this.tags.slice(-1)[0]) {
                this.$router.push({ name: this.tags.slice(-2, -1)[0] })
            }
            this.$store.commit("CloseTag", tag)
        },
        selectTag(tag) {
            if (tag.split('_').length === 1) {
                this.$router.push({ name: tag })
            } else {
                this.$router.push({ name: tag.split('_')[0], params: { id: tag.split('_')[1] } })
            }
            this.$store.commit("SelectTag", tag)
        }
    },
    watch: {
        '$route': {
            handler(route) {
                if (Object.keys(route.params).length === 0) {
                    this.$store.commit("AddTag", route.name)
                    this.$store.commit("SelectTag", route.name)
                } else {
                    this.$store.commit("AddTag", route.name + '_' + route.params.id)
                    this.$store.commit("SelectTag", route.name + '_' + route.params.id)
                }
            },
            deep: true,
            immediate: true,
        }

    }
}
</script>
