<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Sider breakpoint="md" collapsible :collapsed-width="78" v-model="isCollapsed">

        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <router-link to="/55148917/page1">
            <MenuItem name="1-1">
                <Icon type="ios-navigate"></Icon>
                <span>写文章</span>
            </MenuItem>
          </router-link>
          <router-link to="/55148917/page2">
            <MenuItem name="1-2">
                <Icon type="ios-search"></Icon>
                <span>文章管理</span>
            </MenuItem>
          </router-link>
        </Menu>
        <div slot="trigger"></div>
      </Sider>
      <Layout>
        <Header class="layout-header-bar"></Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '300px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isCollapsed: false
      };
    },
    computed: {
      menuitemClasses: function () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods:{
      handleSelect(key,) {
        switch (key) {
          case '1':
            this.$router.push('/Page1');
            break;
          case '2':
            this.$router.push('/Page2')
            break;
        }
      }
    }
  }
</script>
