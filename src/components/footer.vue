<template>
    <div class="footer">
      <p>© 2011-2018. 夜枫. <span class="show">All Rights Reserved. Lovingly made by yefengs.</span> 青ICP备23214342-2</p>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>
  .footer{
    height: 50px;
    width: 100%;
    background-color: #f5f5f5;
    line-height: 50px;
    text-align: center;
    margin-top: 30px;
  }
  @media screen and (max-width: 768px){
    .show{
      display: none;
    }
  }
</style>
