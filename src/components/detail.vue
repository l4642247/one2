<template>
  <Card class="card bdwidth" dis-hover>
  <h5>{{ article.title }}</h5>
  <p class="time"> <Icon type="md-calendar" size="16"/> &nbsp;{{ article.date }}</p>
  <div class="content" v-html="article.content"></div>
    <div class="sub">
      <div class="left"><Icon type="ios-heart" v-bind:class="[article.likesbefore ? 'clicked':'notClicked']" size="16" @click="addAgree(article.id, 0)"/>&nbsp;{{ article.agreeNum }}</div>
      <div class="right"><Icon type="md-thermometer" size="16"/>&nbsp;{{ article.clickNum }}℃&nbsp;&nbsp;<router-link :to="'/content/' + article.id"><Icon type="md-text" size="16"/>&nbsp;{{ article.replyNum }}&nbsp;Replies</router-link></div>
    </div>
  </Card>
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
        addAgree(id, type, index){
          this.$api.get('article/addAgree/' + id + '/'+ type, null, r => {
            if(r.resData == 1){
              this.$Message.success('谢谢点赞！');
              this.article.agreeNum += 1
              this.article.likesbefore = true
            }else{
              this.$Message.warning('太客气了！');
            }
          })
        },
      }
    }
</script>

<style scoped>
  @import '../../static/css/article.css';
  @import '../../static/css/m.css';
  .notClicked{
    color: #a7a7a7;
  }
  .notClicked:hover{
    color: #fd6262;
  }
  .clicked{
    color: #fd6262;
  }
  .cardpage{
    padding-top: 100px;
  }
  .card{
    margin-top: 0px;
    padding-top: 60px;
  }
</style>
