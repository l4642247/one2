<template>
  <div v-html="article.content"></div>
</template>

<script>
    export default {
      name: "Content",
      data () {
        return {
          id: this.$route.params.id,
          article: {}
        }
      },
      created () {
        this.getData()
      },
      methods: {
        getData () {
          this.$api.get('article/content/' + this.id, null, r => {
            this.article = r.resData
            console.log(this.article)
          })
        }
      }
    }

</script>

<style scoped>
</style>
