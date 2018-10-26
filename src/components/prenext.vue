<template>
    <div class="preNext">
      <div class="left">
          <router-link v-if="preData!=''" :to="'/content/' + preData.id" @click.native="flushCom">
            <Icon type="md-arrow-round-back" />&nbsp;{{ preData.title }}
          </router-link>
      </div>
      <div class="right">
          <router-link v-if="nextData!=''" :to="'/content/' + nextData.id" @click.native="flushCom">
            {{ nextData.title }}&nbsp;<Icon type="md-arrow-round-forward" />
          </router-link>
      </div>
    </div>
</template>

<script>
    export default {
      name: "prenext",
      data () {
        return {
          id: this.$route.params.id,
          preData: "",
          nextData: ""
        }
      },
      created () {
        this.getData()
      },
      methods: {
        getData () {
          var _self = this;
          this.$api.get('article/preAndNext/' + this.id, null, r => {
            var data = r.resData
            $.each(data, function(index, val){
              if(val.dir == '0'){
                _self.preData = JSON.parse(JSON.stringify(val))
              }else{
                _self.nextData = JSON.parse(JSON.stringify(val))
              }
            });
          })
        },

        //vue-router 如何在当前路由下重新点击当前路由的router-link实现刷新
        flushCom:function(){
          this.$router.go(0);
        }

      }
    }
</script>

<style scoped>
  .preNext{
    overflow: auto;
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    font-size: 1.1em;
  }
  .preNext a{
    color: #555555;
  }
  .preNext a:hover{
    color: #fd6262;
  }
  .left{
    overflow: auto;
    width: 50%;
    float: left;
    text-align: left;
  }
  .right{
    overflow: auto;
    width: 50%;
    float: left;
    text-align: right;
  }
  @media screen and (min-width: 768px){
    .preNext{
      width: 800px;
    }
  }
</style>
