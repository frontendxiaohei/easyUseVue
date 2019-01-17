<template>
  <div>
    <div class="main-div">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <van-tabbar v-model="active" @change="changeTabbar(active)">
      <van-tabbar-item icon="shop">首页</van-tabbar-item>
      <van-tabbar-item icon="records">列表</van-tabbar-item>
      <van-tabbar-item icon="cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">会员中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 0,
        nowPath: '', //当前路径
      }
    },
    created() {
      this.changeTabBarActive()
    },
    methods: {
      changeTabBarActive() {
        console.log(active);
        switch(active){
          case 0:
          this.$router.push({name: 'ShopMall'})
        }
      }
    }
  }
</script>

<style>

</style>