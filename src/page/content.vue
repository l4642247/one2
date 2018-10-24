<template>
  <div>
    <Header></Header>
    <Detail></Detail>
    <Footer></Footer>
  </div>
</template>

<script>
  import Detail from '../components/detail.vue'
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  export default {
    components: {Header, Footer, Detail},
    name: "Content",
  }
</script>

<style scoped>
</style>
