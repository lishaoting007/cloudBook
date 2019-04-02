<template>
  <div>
    <swiper :options="swiperOption"
            ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in swiperData"
                    :key="index">
        <router-link :to="{name:'details', params: {id: item.book._id}}"
                     class="swiper-img-wrap">
          <img :src="item.img"
               :alt="item.img"
               class="swiper-img">
          <div class="title">{{ item.title }}</div>
        </router-link>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css"
import { swiper, swiperSlide } from "vue-awesome-swiper"
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperData: []
    };
  },
  methods: {
    getSwiper () {
      this.$axios.get(this.$api.getSwiper).then(res => {
        this.swiperData = res.data;
      })
    }
  },
  created () {
    this.getSwiper()
  }
};
</script>

<style scoped lang='scss'>
@import "../../globalCss/px2-rem.scss";

.swiper-img-wrap {
  position: relative;
  color: rgba(255, 255, 255, 0.9);
  display: block;
  .title {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 4px;
    height: 20px;
    background: rgba(0, 0, 0, 0.5);
    font-size: 16px;
    text-decoration: none;
  }
  .swiper-img {
    height: p2r(400);
  }
}
</style>