<template>
  <div class="cardpage">
    <Card class="card bdwidth" v-for="(item, index) in list1" :key="index">
      <h5><router-link :to="'/content/' + item.id">{{ item.title }}</router-link></h5>
      <p class="time"> <Icon type="md-calendar" size="16"/> &nbsp;{{ item.date }}</p>
      <div class="content" v-html="item.summary"></div>
      <div class="sub">
        <div class="left"><Icon type="ios-heart" v-bind:class="[item.likesbefore ? 'clicked':'notClicked']" size="16" @click="addAgree(item.id, 0, index)"/>&nbsp;{{ item.agreeNum }}</div>
        <div class="right"><Icon type="md-thermometer" size="16"/>&nbsp;{{ item.clickNum }}℃&nbsp;&nbsp;<router-link :to="'/content/' + item.id"><Icon type="md-text" size="16"/>&nbsp;{{ item.replyNum }}&nbsp;Replies</router-link></div>
      </div>
    </Card>
    <div class="pagediv bdwidth">
      <Page :total="count" :page-size="pageSize" size="small" show-total @on-change="changepage" />
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        pageSize : 5 , //每页显示20条数据
        index : 1, //当前页码
        count : 0, //总记录数
        list1 : [],
        height : 0,
        curHeight :0,
      }
    },
    beforeMount() {
      if(this.getCookie('pageIndex') != ''){
        this.index = this.getCookie('pageIndex')
      }
      this.getData(this.index);
    },
    methods: {
      changepage (index) {
        this.getData (index);
        this.setCookie('pageIndex', index , 1)
      },
      getData (index) {
        this.$api.get('article/all?pageSize=' + this.pageSize + '&currentPage=' + index, null, r => {
          this.list1 = r.resData
          this.count = r.count
        })
      },
      addAgree(id, type, index){
        this.$api.get('article/addAgree/' + id + '/'+ type, null, r => {
          if(r.resData == 1){
            this.$Message.success('谢谢点赞！');
            this.list1[index].agreeNum += 1
            this.list1[index].likesbefore = true
          }else{
            this.$Message.warning('太客气了！');
          }
        })
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
  .notClicked{
    color: #a7a7a7;
  }
  .notClicked:hover{
    color: #fd6262;
  }
  .clicked{
    color: #fd6262;
  }
  .pagediv{
    margin: 0 auto;
    padding-top: 80px;
    padding-bottom: 40px;
  }
</style>
