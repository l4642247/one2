<template>
  <div>
    <Table border :columns="columns7" :data="data6"></Table>
    <Modal
      v-model="modal1"
      title="Common Modal dialog box title"
      @on-ok="ok"
      @on-cancel="cancel">
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        pageSize : 10 , //每页显示20条数据
        currentPage : 1, //当前页码
        count : 0, //总记录数
        modal1: false,
        data6: [
          {
            title: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park'
          }
        ],
        columns7: [
          {
            title: '标题',
            key: 'title',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person'
                  }
                }),
                h('strong', params.row.title)
              ]);
            }
          },
          {
            title: '浏览量',
            key: 'clickNum'
          },
          {
            title: '时间',
            key: 'date'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      //this.show(params.index)
                    }
                  }
                }, 'View'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.modal1 = true
                      this.remove(params.index)
                    }
                  }
                }, 'Delete')
              ]);
            }
          }
        ],

      }
    },
    beforeMount() {
      this.getData();
    },
    methods: {
      show (index) {
        this.$Modal.info({
          title: 'User Info',
          content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
        })
      },
      remove (index) {
        this.data6.splice(index, 1);
      },
      getData () {
        this.$api.get('article/all?pageSize=' + this.pageSize + '&currentPage=' + this.currentPage, null, r => {
          this.data6 = r.resData
          this.count = r.count
        })
      },
      ok () {
        this.$Message.info('Clicked ok');
      },
      cancel () {
        this.$Message.info('Clicked cancel');
      }
    }
  }
</script>
