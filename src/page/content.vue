<template>
  <div>
    <Header></Header>
    <Detail></Detail>
    <PreNext></PreNext>
    <Comment></Comment>
    <Footer></Footer>
  </div>
</template>

<script>
  import Comment from '../components/comment.vue'
  import PreNext from '../components/prenext.vue'
  import Detail from '../components/detail.vue'
  import Header from '../components/header.vue'
  import Footer from '../components/footer.vue'
  export default {
    components: {Comment,PreNext,Header, Footer, Detail},
    name: "Content",
  }
</script>

<style scoped>
</style>
