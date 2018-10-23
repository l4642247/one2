<template>
    <div class="header">
      <div class="notice">
        <h1>夜枫</h1>
        <ul>
          <li><Icon type="md-information" />关于</li>
          <li><Icon type="md-clipboard" />留言</li>
          <li><Icon type="ios-link" />友链</li>
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
    height:380px;
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
    margin-top: 100px;
    min-width: 300px;
  }
  .header ul li{
    list-style: none;
    float: left;
    margin-left: 20px;
    width: 80px;
    line-height: 16px;
  }
  @media screen and (min-width: 768px){
    .header {
      height: 120px;
    }
    .notice{
      width: 960px;
      overflow: auto;
      height: 100%;
      margin: 0 auto;
    }
    .header h1{
      width: 50%;
      float: left;
      margin-top: 20px;
      text-align: left;
      font-family: 华文楷体;
      font-size: 250%;
    }
    .header ul{
      float: right;
      margin-top: 50px;
      text-align: right;
    }
  }
</style>
