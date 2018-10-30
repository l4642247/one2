<template>
  <div>
    <Card class="card" dis-hover>
    <h5>{{ article.title }}</h5>
    <p class="time"> <Icon type="md-calendar" size="16"/> &nbsp;{{ article.date }}</p>
    <div class="content" v-html="article.content"></div>
    <div class="sub">
      <div class="left"><router-link :to="'/content/' + article.id"><Icon type="ios-heart" size="16"/></router-link>&nbsp;{{ article.agreeNum }}</div>
      <div class="right"><Icon type="md-thermometer" size="16"/>&nbsp;{{ article.clickNum }}℃&nbsp;&nbsp;<router-link :to="'/content/' + article.id"><Icon type="md-text" size="16"/>&nbsp;{{ article.replyNum }}&nbsp;Replies</router-link></div>
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
        this.setClickNum()
      },
      methods: {
        getData () {
          this.$api.get('article/content/' + this.id, null, r => {
            r.resData.content = r.resData.content.replace('<p>[s-start]</p>','')
            r.resData.content = r.resData.content.replace('<p>[s-end]</p>','')
            this.article = r.resData
          })
        },
        setClickNum(){
          //查询cookie中是否存在
          if(this.getCookie(this.id) == ''){
            this.setCookie(this.id, 'looking', 1)
            this.$api.get('article/addClick/' + this.id, null, r => {
              if(r.resData == 1){
                this.article.clickNum += 1
              }
            })
          }
        },
        //设置cookie
        setCookie: function (cname, cvalue, exdays) {
          var d = new Date();
          d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
          var expires = "expires=" + d.toUTCString();
          console.info(cname + "=" + cvalue + "; " + expires);
          document.cookie = cname + "=" + cvalue + "; " + expires;
          console.info(document.cookie);
        },
        //获取cookie
        getCookie: function (cname) {
          var name = cname + "=";
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
          }
          return "";
        },
      }
    }
</script>

<style scoped>
  @import '../../static/css/article.css';
  @import '../../static/css/m.css';
</style>
