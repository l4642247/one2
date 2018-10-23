<template>
    <Form :model="formItem" :label-width="40">
      <FormItem label="标题">
        <Input v-model="formItem.title" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="内容">
        <textarea  v-model="formItem.content" id="editor" placeholder="Enter something..."></textarea>
      </FormItem>
      <FormItem label="分类">
        <Select v-model="formItem.class">
          <Option v-for="item in list" :value="item.id" :key="item.id">{{item.typename}}</Option>
        </Select>
      </FormItem>
      <FormItem label="公开">
        <RadioGroup v-model="formItem.display">
          <Radio label="male">公开</Radio>
          <Radio label="female">私密</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="标签">
        <Tag v-model="formItem.tag" v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}</Tag>
        <Button icon="ios-add" type="dashed" size="small" @click="handleAdd">添加标签</Button>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="submit()">Submit</Button>
        <Button @click="handleReset('formItem')" style="margin-left: 8px">Reset</Button>
      </FormItem>
      <Modal
        v-model="modal1"
        title="tips"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>You really wanna to submit?</p>
      </Modal>
    </Form>

</template>

<style scoped>

</style>

<script>
  import Simditor from 'simditor'

  export default {
    name:'ArticleForm',
    data () {
      return {
        editor:'',
        list:[],
        count: [0, 1, 2],
        modal1: false,
        formItem: {
          content:'',
          title: '',
          class: '',
          display: 'male',
        },
      }
    },
    mounted:function(){
      //编辑器部分
      this.editor = new Simditor({
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
      this.getData();
    },
    methods: {
      handleAdd () {
        if (this.count.length) {
          this.count.push(this.count[this.count.length - 1] + 1);
        } else {
          this.count.push(0);
        }
      },
      handleClose2 (event, name) {
        const index = this.count.indexOf(name);
        this.count.splice(index, 1);
      },
      submit: function() {
        this.modal1 = true;
      },
      ok () {
        var content = this.editor.getValue();
        var title = this.formItem.title;
        var type = this.formItem.class;
        this.$Message.info(content + '  ' + title + '' + type);

        var params = new URLSearchParams();
        params.append('content', content);
        params.append('title', title);
        params.append('type', type);
        this.$api.post('article/saveDaily', params, r => {
          this.$Message.info("0000");
        })
      },
      cancel () {
      },
      getData () {
        this.$api.get('class/all', null, r => {
          this.list = r.resData
        })
      }
    }
  }
</script>
