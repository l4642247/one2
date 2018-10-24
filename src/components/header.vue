<template>
    <div class="header">
      <div class="notice">
        <h1>夜枫</h1>
        <ul>
          <li><router-link :to="'/content/'"><Icon type="ios-alert-outline" size="14"/>&nbsp;关于</router-link></li>
          <li><router-link :to="'/content/'"><Icon type="md-clipboard" size="14"/>&nbsp;留言</router-link></li>
          <li><router-link :to="'/content/'"><Icon type="ios-link" size="14"/>&nbsp;友链</router-link></li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
  .header{
    width:100%;
    overflow: auto;
    background-color: #f5f5f5;
  }
  .header h1{
    margin-top: 100px;
    text-align: center;
    font-family: 华文楷体;
    font-size: 250%;
  }
  .header ul{
    display:table;
    margin:0 auto;
    margin-top: 60px;
  }
  .header ul li{
    list-style: none;
    float: left;
    margin-left: 20px;
    line-height: 16px;
  }
  .notice{
    padding: 0 0;
  }
  li a{
    color: #5e5e5e;
  }
  li a:hover{
    color: #fd6262;
  }
  @media screen and (max-width: 768px){
    .header ul{
      height: 100px;
      margin-top: 100px;
    }
  }
  @media screen and (min-width: 768px){
    .header {
      height: 150px;
    }
    .notice{
      width: 960px;
      overflow: auto;
      height: 100%;
      margin: 0 auto;
      padding: 0px 20px 0px 10px;
    }
    .header h1{
      width: 50%;
      float: left;
      margin-top: 50px;
      text-align: left;
      font-family: 华文楷体;
      font-size: 250%;
    }
    .header ul{
      float: right;
      margin-top: 75px;
      text-align: right;
    }
    .header ul li{
      width: 80px;
    }
  }
</style>
