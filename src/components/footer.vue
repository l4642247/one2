<template>
    <div class="footer">
      <p>&#169;&nbsp;2018-{{year}}. 独白. <span class="show">All Rights Reserved.&nbsp;{{count}}字</span> 湘ICP备15006988号-1</p>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          year: '',
          count:''
        }
      },
      mounted() {
        this.init();
      },
      methods: {
        init() {
          this.year = new Date().getFullYear()
          this.$api.get('article/getWordCount', null, r => {
            this.count = r.resData
          })
        },
      },
      name: "footer"
    }
</script>

<style scoped>
  .footer{
    width: 100%;
    background-color: #f5f5f5;
    line-height: 50px;
    text-align: center;
  }
  @media screen and (max-width: 768px){
    .show{
      display: none;
    }
  }
</style>
