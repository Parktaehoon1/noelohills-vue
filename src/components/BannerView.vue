<template>
  <!-- 배너영역 -->
  <div class="banner">
    <Swiper :modules="modules" 
            :autoplay="{
            delay: 2000,
            disableOnIteraction: false
            }" 
            :loop="true" 
            :pagination= "{
              el: '.sw-banner-pg'
            }"
            effect="fade"
            class="sw-banner">

        <SwiperSlide class="swiper-slide">
          <a href="#" class="banner-1"></a>
        </SwiperSlide>

        <SwiperSlide class="swiper-slide">
          <a href="#" class="banner-2"></a>
        </SwiperSlide>

        <SwiperSlide class="swiper-slide">
          <a href="#" class="banner-3"></a>
        </SwiperSlide>

      <!-- 슬라이드 컨트롤 -->
      <div class="sw-banner-control">
        <!-- 페이지네이션 -->
        <div class="sw-banner-pg"></div>
      </div>

    </Swiper>

    <button class="banner-close"></button>
  </div>
</template>

<script>
  import { onUpdated, ref } from 'vue';
  import $ from 'jquery';
  import { Autoplay, Pagination, EffectFade } from 'swiper';
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import "swiper/css/effect-fade";
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      onUpdated(() => {
        let fixY = ref(0);
        fixY.value = $('.banner').height();
        let banner_close = $('.banner-close');

        banner_close.click(() => {
          // 배너가 보여지지 않으므로 값을 제거
          fixY.value = 0;
          $('.banner').slideUp(300);
        });

      });
      return {
        modules: [Autoplay, Pagination, EffectFade],
      }
    }
  }
</script>

<style>
  /* 배너 */
  .banner {
    position: relative;
    display: block;
    height: 50px;
    background-color: #ffcc00;
  }

  .banner .sw-banner {
    width: 100%;
    height: 100%;
  }

  .banner .sw-banner .swiper-slide a {
    position: relative;
    display: block;
    height: 100%;
  }

  .banner .sw-banner .banner-1 {
    background: url("@/assets/images/banner_pc_1.jpg") no-repeat center;
  }

  .banner .sw-banner .banner-2 {
    background: url("@/assets/images/banner_pc_2.jpg") no-repeat center;
  }

  .banner .sw-banner .banner-3 {
    background: url("@/assets/images/banner_pc_3.jpg") no-repeat center;
  }

  .banner .sw-banner .sw-banner-control {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 28px;
    display: block;
    z-index: 9;
    /* pagination bullet css 수정 */
  }

  .banner .sw-banner .sw-banner-control .sw-banner-pg .swiper-pagination-bullet {
    width: 10px;
    height: 4px;
    border-radius: 0;
    background-color: #fff;
    opacity: 0.4;
    margin: 0 2px;
  }

  .banner .sw-banner .sw-banner-control .sw-banner-pg .swiper-pagination-bullet-active {
    width: 20px;
    height: 4px;
    opacity: 1;
  }

  .banner .banner-close {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 32px;
    height: 32px;
    background: url("@/assets/images/x_icon.png") no-repeat center;
    border: 0;
    z-index: 9;
    cursor: pointer;
  }
</style>