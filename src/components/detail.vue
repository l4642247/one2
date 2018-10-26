<template>
  <div>
    <Card class="card" dis-hover>
    <h5>{{ article.title }}</h5>
    <p class="time"> <Icon type="md-calendar" size="16"/> &nbsp;{{ article.date }}</p>
    <div class="content" v-html="article.content"></div>
    <div class="sub">
      <div class="left"><router-link :to="'/content/' + article.id"><Icon type="ios-heart" size="16"/></router-link>&nbsp;{{ article.agreeNum }}</div>
      <div class="right"><Icon type="md-thermometer" size="16"/>&nbsp;{{ article.replyNum }}℃&nbsp;&nbsp;<router-link :to="'/content/' + article.id"><Icon type="md-text" size="16"/>&nbsp;{{ article.clickNum }}&nbsp;Replies</router-link></div>
    </div>
    </Card>
  </div>
</template>

<script>
    export default {
      name: "detail",
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
  @import '../../static/css/article.css';
  @import '../../static/css/m.css';
</style>
