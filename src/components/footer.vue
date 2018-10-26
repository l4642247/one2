<template>
    <div class="footer">
      <p>© 2018-2021. 独白. <span class="show">All Rights Reserved. Lovingly made by yefengs.</span> 湘ICP备15006988号-1</p>
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
