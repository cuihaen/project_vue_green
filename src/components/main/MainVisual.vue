<template>
  <div class="main_visual">
      <swiper class="swiper1" :options="swiperOption">
        <swiper-slide>
          <img src="../../assets/visual1.jpg" alt='visual이미지1' >
          <span>The future is electric, and it’s available now.</span>
        </swiper-slide>
          <swiper-slide>
          <img src="../../assets/visual2.jpg" alt='visual이미지2' >
          <span>Going all in. For our planet. For our future.</span>
        </swiper-slide>
          <swiper-slide>
          <img src="../../assets/visual3.jpg" alt='visual이미지3' >
          <span>We are pioneers in the unlimited world of motoring<br>without complexity, noise, or emissions.</span>
        </swiper-slide>
          <swiper-slide>
          <img src="../../assets/visual4.jpg" alt='visual이미지4' >
          <span>A path to a cleaner future powered by you.</span>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<style>
.swiper1 .swiper-slide{overflow: hidden;height: 800px;position:relative}
.swiper1 .swiper-slide img{object-fit:cover;object-position: 50% 50%;width:100%;height:100%}
.swiper1 .swiper-slide span{position:absolute;left:50%;top:50%;transform: translateX(-50%) translateY(-50%);color:#fff;font-size: 2.8em;width:100%;
                            text-align: center;text-shadow: 2px 3px 5px rgba(0,0,0,.6);font-weight: 500;font-family: 'Patrick Hand', cursive}
.swiper1 .swiper-pagination{bottom:30px}
.swiper1 .swiper-pagination-bullets .swiper-pagination-bullet{background: #fff;opacity: .6}
.swiper1 .swiper-pagination-bullets .swiper-pagination-bullet-active{background: #96bb7c}

/* 일반PC */
@media screen and (max-width:1280px){
.swiper1 .swiper-slide span{width:90%;font-size:4vw}
}

/* 일반테블릿 */
@media screen and (max-width:1024px){
.swiper1 .swiper-slide span{width:90%;font-size:4.5vw}
}

/* 소형테블릿 */
@media screen and (max-width:768px){
.swiper1 .swiper-slide span{width:90%;font-size:5.5vw}
}

/* 모바일 */
@media screen and (max-width:640px){
  .swiper1 .swiper-slide span{width:90%;font-size:6vw}
}
</style>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'main_visual',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          autoplay:{
            delay:3500,
            disableOnInteraction:false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>