<template>
  <div>
    <Header></Header>
    <div v-bind:style="{'min-height': bdHeight + 'px' }">
      <ContentCard></ContentCard>
      <BackTop></BackTop>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import ContentCard from '../components/contentcard.vue'
  import BackTop from '../components/backtop.vue'
  export default {
    components: {ContentCard, Header, Footer, BackTop},
    name: "Index",
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
