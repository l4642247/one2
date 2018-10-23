<template>
  <div>
    <Card class="card" dis-hover v-for="(item, index) in list1" :key="index">
      <h5><router-link :to="'/content/' + item.id">{{ item.title }}</router-link></h5>
      <p>{{ item.summary }}</p>
      {{ item.date }}
      {{ item.replyNum }}
      {{ item.clickNum }}
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
    width: 960px;
    margin: 0 auto;
    margin-top: 30px;
  }
</style>
