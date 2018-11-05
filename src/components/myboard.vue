<template>
    <Card class="card bdwidth" dis-hover>
      <div class="content" v-html="article.content"></div>
    </Card>
</template>

<script>
  export default {
    name: "myinfo",
    data() {
      return {
        article: {}
      }
    },
    created() {
      this.getData()
      this.setClickNum()
    },
    methods: {
      getData() {
        this.$api.get('article/contentbytype/1', null, r => {
          r.resData.content = r.resData.content.replace('<p>[s-start]</p>','')
          r.resData.content = r.resData.content.replace('<p>[s-end]</p>','')
          this.article = r.resData
        })
      },
    }
  }

</script>

<style scoped>
  @import '../../static/css/m.css';
  .bdwidth{
    margin: 0 auto;
  }
  .card{
    border: 0px;
  }

  >>> .content img{
    border-radius: 5px;
    height:auto;
    max-width:100%;
    max-height:100%;
  }
</style>
