<template>
  <div>
    <Header></Header>
    <div v-bind:style="{'min-height': bdHeight + 'px' }">
      <Detail></Detail>
      <PreNext></PreNext>
      <Comment></Comment>
      <BackTop></BackTop>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Comment from '../components/comment.vue'
  import PreNext from '../components/prenext.vue'
  import Detail from '../components/detail.vue'
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import BackTop from '../components/backtop.vue'
  export default {
    components: {Comment,PreNext,Header, Footer, Detail, BackTop},
    name: "Content",
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
