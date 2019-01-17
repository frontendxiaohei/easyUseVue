<template>
  <div>
    <div class="search-bar">
      <van-row>
        <van-col :span="3">
          <img :src="locationIcon" width="80%" class="location-icon" />
        </van-col>
        <van-col :span="16">
          <input type="text" class="search-input">
        </van-col>
        <van-col :span="5">
          <van-button size="mini">find</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- swiper area -->
    <div class="swiper-area">
      <van-swipe :autoplay="1000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
          <img :src="banner.image" width="100%" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- type  bar-->
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index">
        <img :src="cate.image" width="90%" alt="">
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <!-- adbanner area -->
    <div class="bannerBar">
      <img :src="adBanner" width="100%" alt="">
    </div>
    <!-- goods recommend area -->
    <div class="recommend-area">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%" alt="">
              <div>{{item.goodsName}}</div>
              <div>￥{{item.price}}(￥{{item.mallPrice}})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- floor area -->
    <Floor :floorData="floor1" :floorTitle="floorName.floor1" />
    <Floor :floorData="floor2" :floorTitle="floorName.floor2" />
    <Floor :floorData="floor3" :floorTitle="floorName.floor3" />
    <!-- Hot sale area -->
    <div class="hot_area">
      <div class="hot_title">热卖商品</div>
      <div class="hot_goods">
        <!-- list area -->
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
              <goods-info :goodsId="item.goodsId" :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price">

              </goods-info>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
  import Floor from '../../base/Floor'
  import GoodsInfo from '../../base/GoodsInfo'
  import axios from 'axios'

  export default {
    data() {
      return {
        swiperOption:{
          slidesPerView:3
        },
        locationIcon: require('../../assets/position.png'),
        bannerPicArray: [],
        category: [],
        adBanner: '',
        recommendGoods: [],
        floor1: [],
        floor2: [],
        floor3: [],
        floorName: {},
        hotGoods: [] //热卖商品
      }
    },
    components: {Floor,GoodsInfo},
    created() {
      axios({
        url: 'https://www.easy-mock.com/mock/5c3d5afa89574455b94b320c/index',
        method: 'get'
      })
      .then(response=>{
        console.log(response);
        if(response.status === 200){
          this.category=response.data.data.category;
          this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
          this.bannerPicArray = response.data.data.slides;
          this.recommendGoods = response.data.data.recommend;
          this.floor1 = response.data.data.floor1;
          this.floor2 = response.data.data.floor2;
          this.floor3 = response.data.data.floor3;
          this.floorName = response.data.data.floorName;
          this.hotGoods = response.data.data.hotGoods;
        }
      })
      .catch(error=>{
        console.log(error)
      })
    }
  }
</script>

<style scoped>
  .search-bar {
    height: 2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
    overflow: hidden;
  }

  .search-input {
    width: 100%;
    height: 1.3rem;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 1px solid #fff;
    background-color: #e5017d;
    color: #fff;
  }

  .location-icon {
    padding-top: .2rem;
    padding-left: .3rem;
  }
  .swiper-area{
    clear: both;
    max-height: 15rem;
    overflow: hidden;
  }
  .type-bar{
    background-color: #fff;
    margin: 0 .3rem .3rem .3rem;
    border-radius: .3rem;
    font-size: 14px;
    display: flex;
    flex-wrap: nowrap;
    height: 3rem;
  }
  .type-bar div{
    padding: .3rem;
    font-size: 12px;
    text-align:center;
    flex: 1;
  }
  .bannerBar{
    margin-top: 1.3rem;
  }
  .recommend-area{
    background-color: #fff;
    margin-top: .3rem;
  }
  .recommend-title{
    border-bottom: 1px solid #eee;
    font-size: 14px;
    padding: .2rem;
    color: #e5017d;
  }
  .recommend-body{
    border-bottom: 1px solid #eee;
  }
  .recommend-item{
    width: 99%;
    border-right: 1px solid #eee;
    font-size: 12px;
    text-align: center;    
  }
</style>