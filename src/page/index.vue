<template>
  <div>
    <Header></Header>
    <ContentCard></ContentCard>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  import ContentCard from '../components/contentcard.vue'
  export default {
    components: {ContentCard, Header, Footer},
    name: "Index"
  }
</script>

<style scoped>

</style>
