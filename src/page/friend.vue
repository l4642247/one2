<template>
    <div>
      <Header></Header>
      <div v-bind:style="{'min-height': bdHeight + 'px' }">
        friend
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  export default {
    name: "friend",
    components: {Header, Footer},
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
