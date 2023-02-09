<template>
    <div class="main_content">
        <h3 class="hidden">본문콘텐츠영역</h3>
        <MainVisual/>
        <MainSub1/>
        <MainSub2/>
        <div class="backImgBox"></div>
        <MainSub3/>
        <MainSub4/>
    </div>
</template>
  
<script>
    import MainVisual from './main/MainVisual.vue'
    import MainSub1 from './main/MainSub1.vue'
    import MainSub2 from './main/MainSub2.vue'
    import MainSub3 from './main/MainSub3.vue'
    import MainSub4 from './main/MainSub4.vue'

    export default {
        name : 'main_content',
        components:{
            MainVisual,
            MainSub1,
            MainSub2,
            MainSub3,
            MainSub4
        }
    }
</script>
  
<style>
.backImgBox{background: url(../assets/charging_station_back.jpg) center center no-repeat;height: 320px;background-size: 100%;background-attachment: fixed}
/* 일반PC */
@media screen and (max-width:1280px){
.backImgBox{height: 280px}
}

/* 일반테블릿 */
@media screen and (max-width:1024px){
.backImgBox{height: 250px}
}

/* 소형테블릿 */
@media screen and (max-width:768px){
.backImgBox{height: 250px;background-attachment: scroll}
}

/* 모바일 */
@media screen and (max-width:640px){
.backImgBox{height: 230px}
}
</style>