<template>
  <div>
    <textarea name="content" id="editor" placeholder="Balabala" autofocus></textarea>
  </div>
</template>

<style scoped>
</style>

<script>
  import Simditor from 'simditor'

  export default {
    name:'ArticleForm',

    mounted:function(){
      //编辑器部分
      var editor = new Simditor({
        textarea: $('#editor'),
        upload:{
          url: "https://nicecoder.cn/imageupload/imageUpload",
          params: null,
          fileKey: 'upload_file',
          connectionCount: 3,
          leaveConfirm: '正在上传，是否确定要离开界面？'
        },
        toolbar:['title','bold','italic','underline','strikethrough',
          'fontScale','color','ol','ul','blockquote','code',
          'table','link','image','hr','indent','outdent','alignment']
      });

    }
  }
</script>
