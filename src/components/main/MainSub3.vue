<template>
    <div class="contentInner2">
        <div class="txtBox3">
            <h4>STATION</h4>
            <p>한국전력공사에서 설치한 전국의 전기차 충전소 위치정보입니다.</p>
            <router-link to="/vue/sub3" class="link"><span class="hidden">VIEW MORE</span><i class="fa-solid fa-plus"></i></router-link>
        </div>
        <swiper class="swiper2" :options="swiperOption">
            <swiper-slide>
                <img src="../../assets/charging_station1.jpg" alt="전기차 충전소">
                <dl>
                    <dt><i class="fa-solid fa-location-dot"></i> 서울특별시 종로구 관철동 7-3</dt>
                    <dd><i class="fa-solid fa-car"></i> <strong>충전가능차량 :</strong> SM3 Z.E, 테슬라</dd>
                </dl>
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/charging_station2.jpg" alt="전기차 충전소">
                <dl>
                    <dt><i class="fa-solid fa-location-dot"></i> 서울특별시 종로구 내수동 사직로8길 34</dt>
                    <dd><i class="fa-solid fa-car"></i> <strong>충전가능차량 :</strong> SM3 Z.E,레이EV,소울EV,닛산리프,아이오닉EV,BMW i3,스파크EV,볼트EV,테슬라</dd>
                </dl>
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/charging_station3.jpg" alt="전기차 충전소">
                <dl>
                    <dt><i class="fa-solid fa-location-dot"></i> 서울특별시 종로구 사직동 사직로8길 4</dt>
                    <dd><i class="fa-solid fa-car"></i> <strong>충전가능차량 :</strong> SM3 Z.E,레이EV,소울EV,닛산리프,아이오닉EV,BMW i3,스파크EV,볼트EV,테슬라</dd>
                </dl>
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/charging_station4.jpg" alt="전기차 충전소">
                <dl>
                    <dt><i class="fa-solid fa-location-dot"></i> 서울특별시 강남구 자곡동 자곡로3길 21</dt>
                    <dd><i class="fa-solid fa-car"></i> <strong>충전가능차량 :</strong> SM3 Z.E,레이EV,소울EV,닛산리프,아이오닉EV,BMW i3,스파크EV,볼트EV,테슬라</dd>
                </dl>
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/charging_station5.jpg" alt="전기차 충전소">
                <dl>
                    <dt><i class="fa-solid fa-location-dot"></i> 서울특별시 강남구 선릉로 121길 12</dt>
                    <dd><i class="fa-solid fa-car"></i> <strong>충전가능차량 :</strong> SM3 Z.E,레이EV,소울EV,닛산리프,아이오닉EV,BMW i3,스파크EV,볼트EV,테슬라</dd>
                </dl>
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/charging_station6.jpg" alt="전기차 충전소">
                <dl>
                    <dt><i class="fa-solid fa-location-dot"></i> 서울특별시 강남구 언주로 211</dt>
                    <dd><i class="fa-solid fa-car"></i> <strong>충전가능차량 :</strong> SM3 Z.E,레이EV,소울EV,닛산리프,아이오닉EV,BMW i3,스파크EV,볼트EV,테슬라</dd>
                </dl>
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/charging_station7.jpg" alt="전기차 충전소">
                <dl>
                    <dt><i class="fa-solid fa-location-dot"></i> 서울특별시 구로구 신도림동 신도림로 56-13</dt>
                    <dd><i class="fa-solid fa-car"></i> <strong>충전가능차량 :</strong> 레이EV,소울EV,닛산리프,아이오닉EV,BMW i3,스파크EV,볼트EV</dd>
                </dl>
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/charging_station8.jpg" alt="전기차 충전소">
                <dl>
                    <dt><i class="fa-solid fa-location-dot"></i> 서울특별시 노원구 노원길 130</dt>
                    <dd><i class="fa-solid fa-car"></i> <strong>충전가능차량 :</strong> SM3 Z.E,레이EV,소울EV,닛산리프,아이오닉EV,BMW i3,스파크EV,볼트EV,테슬라</dd>
                </dl>
            </swiper-slide>
            <div class="swiper-button-next swiper-button" slot="button-next"></div>
             <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
        </swiper>
    </div>
</template>
<style>
.contentInner2 .txtBox3{overflow: hidden;position:relative;width:1280px;margin: 0 auto}
.contentInner2 .txtBox3 h4{font-size: 2em;font-family: 'Patrick Hand', cursive;color:#184d47;font-weight: bold;margin: 15px 0 10px}
.contentInner2 .txtBox3 p{line-height: 2em;text-align: justify;font-size:1.1em}
.contentInner2 .txtBox3 .link{background:#184d47;color:#fff;border-radius: 50%;width:50px;height:50px;font-size: 1.5em;line-height: 44px;
                            display: block;text-align: center;transition:all .3s ease-out;border:2px solid #184d47;position:absolute;top:10px;right:50px}
.contentInner2 .txtBox3 .link:hover{background: #92b19a;box-shadow: 3px 5px 10px 2px rgba(0,0,0,.1);color:#184d47}

.swiper2{padding:50px}
.swiper2 .swiper-slide{box-shadow: 3px 2px 10px 3px rgba(0,0,0,.1);width:250px}
.swiper2 .swiper-slide img{object-fit: contain;width:100%}
.swiper2 .swiper-slide dl{padding:20px 25px}
.swiper2 .swiper-slide dl dt{margin-bottom: 8px;font-weight: 500;font-size: 1.2em}
.swiper2 .swiper-slide dl dt,.swiper2 .swiper-slide dl dd{display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;overflow: hidden;text-overflow: ellipsis}
.swiper2 .swiper-button{opacity: .8;color:#fad586;transition:all .3s ease-out}
.swiper2 .swiper-button:hover{opacity: 1;color:#92b19a}
.swiper2 .swiper-button-prev{left:150px}
.swiper2 .swiper-button-next{right:150px}
/* 일반PC */
@media screen and (max-width:1280px){
.contentInner2 .txtBox3{width:80%}
.contentInner2 .txtBox3 .link{top:50%;right:0;transform:translateY(-50%)}
.swiper2 .swiper-slide{box-shadow: 3px 2px 10px 3px rgba(0,0,0,.1);width:200px}
.swiper2 .swiper-slide dl dt{font-size: 1.1em}
.swiper2 .swiper-slide dl dd{font-size: .9em}
.swiper2 .swiper-slide dl dd{display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;text-overflow: ellipsis}
.swiper2 .swiper-button-prev{left:100px}
.swiper2 .swiper-button-next{right:100px}
}

/* 일반테블릿 */
@media screen and (max-width:1024px){
.swiper2 .swiper-slide{box-shadow: 3px 2px 10px 3px rgba(0,0,0,.1);width:33.33%}
.swiper2 .swiper-slide dl dt{font-size: 1.1em}
.swiper2 .swiper-slide dl dd{font-size: .9em}
.swiper2 .swiper-slide dl{padding:15px 20px}
.swiper2 .swiper-button-prev{left:60px}
.swiper2 .swiper-button-next{right:60px}
}


/* 소형테블릿 */
@media screen and (max-width:768px){
}

/* 모바일 */
@media screen and (max-width:640px){
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
          slidesPerView: 3,
          spaceBetween: 30,
          loop: true,
          freeMode:true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>