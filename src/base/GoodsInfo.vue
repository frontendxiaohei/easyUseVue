<template>
  <div class="goods_info">
    <div class="goods_image">
      <img :src="goodsImage" width="90%" alt="">
    </div>
    <div class="goods_name">
      {{goodsName}}
    </div>
    <div class="goods_price">
      ￥{{goodsPrice|moneyFilter}}
    </div>
  </div>
</template>

<script>
  import {toMoney} from '@/common/filter' 
  export default {
    props: ["goodsImage","goodsName","goodsPrice","goodsId"],
    filters: {
      moneyFilter(money){
        return toMoney(money)
      } 
    },
    methods: {
    }
  }
</script>

<style scoped>
  .goods_name{
    padding: 0 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>