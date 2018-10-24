<template>
  <div>
    <Card class="card" dis-hover v-for="(item, index) in list1" :key="index">
      <h5><router-link :to="'/content/' + item.id">{{ item.title }}</router-link></h5>
      <p class="time"> <Icon type="md-calendar" size="16"/> &nbsp;{{ item.date }}</p>
      <div class="content" v-html="item.summary"></div>
      <div class="sub">
        <div class="left"><router-link :to="'/content/' + item.id"><Icon type="ios-heart" size="16"/></router-link>&nbsp;{{ item.agreeNum }}</div>
        <div class="right"><Icon type="md-thermometer" />&nbsp;{{ item.replyNum }}℃&nbsp;&nbsp;<router-link :to="'/content/' + item.id"><Icon type="md-text" />&nbsp;{{ item.clickNum }}&nbsp;Replies</router-link></div>
      </div>
    </Card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        pageSize : 10 , //每页显示20条数据
        currentPage : 1, //当前页码
        count : 0, //总记录数
        list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        height: 0,
        curHeight:0,
      }
    },
    beforeMount(height) {
      var h = document.documentElement.clientHeight || document.body.clientHeight;
      this.curHeight =h - $(".header").height()-1; //减去页面上固定高度height
      this.getData();
    },
    methods: {
      handleReachBottom () {
        return new Promise(resolve => {
          setTimeout(() => {
            this.addData ();
            resolve();
          }, 500);
        });
      },
      getData () {
        this.$api.get('article/all?pageSize=' + this.pageSize + '&currentPage=' + this.currentPage, null, r => {
          this.list1 = r.resData
          this.count = r.count
          this.currentPage += 1
        })
      },
      addData () {
        this.$api.get('article/all?pageSize=' + this.pageSize + '&currentPage=' + this.currentPage, null, r => {
          var list = r.resData
          for (let i = 0; i < list.length; i++) {
            this.list1.push(list[i]);
          }
          this.count = r.count
          this.currentPage += 1
        })
      },
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
  .card h5 a{
    font-size: 4em;
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
    font-size: 1.3em;
    line-height:2em;
  }
  .content p {
    margin-top: 10px;
  }
  .content img{
    border-radius: 5px;
  }
  .sub{
    overflow: auto;
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
  }
  @media screen and (min-width: 480px){
    .card h5 a{
      font-size: 3em;
    }
  }
</style>
