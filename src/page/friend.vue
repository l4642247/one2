<template>
    <div>
      <Header></Header>
      <div v-bind:style="{'min-height': bdHeight + 'px' }"><MyFriend></MyFriend>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import MyFriend from '../components/myfriend.vue'
  export default {
    name: "friend",
    components: {Header, Footer, MyFriend},
    data () {
      return {
        bdHeight: ''
      }
    },
    mounted() {
      this.setBdHeight();
    },
    methods: {
      setBdHeight () {
        var headerH = $('.header').height();
        var footerH = $('.footer').height();
        var h = document.documentElement.clientHeight || document.body.clientHeight;
        this.bdHeight = h - headerH - footerH;
      },
    }
  }
</script>

<style scoped>

</style>
