<template>
  <div>
    <Table border :columns="columns7" :data="data6"></Table>
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
                  }
                }),
                h('strong', params.row.title)
              ]);
            }
          },
          {
            title: '编号',
            key: 'id'
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
                      this.edit(params.row.id)
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
                      this.delData(params.row.id)
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
      edit (index) {
        this.$router.push({path:'/55148917/page1', query:{id: index} })
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
      delData (id) {
        this.$api.get('article/delete/' + id, null, r => {
          alert(r.resCode)
        })
      }
    }
  }
</script>
