<template>
  <div class="card">
    <h5>{{ article.title }}</h5>
    <p class="time"> <Icon type="md-calendar" size="16"/> &nbsp;{{ article.date }}</p>
    <div class="content" v-html="article.content"></div>
    <div class="sub">
      <div class="left"><router-link :to="'/content/' + article.id"><Icon type="ios-heart" size="16"/></router-link>&nbsp;{{ article.agreeNum }}</div>
      <div class="right"><Icon type="md-thermometer" />&nbsp;{{ article.replyNum }}℃&nbsp;&nbsp;<router-link :to="'/content/' + article.id"><Icon type="md-text" />&nbsp;{{ article.clickNum }}&nbsp;Replies</router-link></div>
    </div>
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
  .card{
    border: 0px;
    width: 960px;
    margin: 0 auto;
    margin-top: 100px;
  }
  .card h5{
    font-size: 2em;
    font-family: 宋体;
    font-weight:normal;
    color: #555555;
  }
  .card a:hover{
    color: #fd6262;
  }
  .time{
    line-height: 10px;
    color: #999999;
    height: 110px;
    padding: 25px 0;
  }
  .content{
    color: #333333;
    font-size: 1.1em;
    line-height:2em;
  }
  .content img{
    width: 50px;
  }
  .sub{
    overflow: auto;
    margin-top: 50px;
  }
  .left{
    width: 50%;
    float: left;
  }
  .right{
    width: 50%;
    float: left;
    text-align: right;
    padding-right:20px;
  }
  .left a{
    color: #a7a7a7;
  }
  .right a{
    color: #797979;
  }
  @media screen and (max-width: 768px){
    .card {
      width: 99%;
    }
    .card h5{
      font-size: 1.5em;
    }
    .content{
      font-size: 1em;
    }
  }
  @media screen and (min-width: 480px){
    .card h5 a{
      font-size: 3em;
    }
  }
</style>
