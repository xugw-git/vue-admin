<template>
    <div class="tag-group" style="background-color:#EEEEEE; padding-left: 20px;">
        <el-tag @close="closeTag(tag)" @click="selectTag(tag)" v-for="(tag, index) in tags" :key="index"
            :effect="tag === currentTag ? 'dark' : 'plain'" closable>
            {{ crumbTrans[tag] }}
        </el-tag>
    </div>
</template>

<script>
export default {
    data() {
        return {
            crumbTrans: { home: '首页', note: '笔记', article: '文章', code: '代码', link: '链接' },
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
            this.$router.push({ name: tag })
            this.$store.commit("SelectTag", tag)
        }
    },
    watch: {
        '$route.name': {
            handler(name) {
                this.$store.commit("AddTag", name)
                this.$store.commit("SelectTag", name)
            },
            deep: true,
            immediate: true,
        }

    }
}
</script>
