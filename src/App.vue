<template>
  <div id="app">
    <HeaderArea/>
  
    <!-- 라우터 컴포넌트에 연결된 컴포넌트가 렌더링 됨-->
    <router-view></router-view>
    <FooterArea />
    <a class="topMove" href="#top">TOP</a>
  </div>
</template>

<script>
import HeaderArea from './components/HeaderArea'
import FooterArea from './components/FooterArea'

export default {
  name : 'app',
  components:{
       HeaderArea,
       FooterArea
  }
}

</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;600;700&display=swap');

/* CSS Reset */

html, body, div , span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video{margin: 0; padding: 0; border: 0; font-size: 100%}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section{display: block}
body{font-family: 'Noto Sans KR', sans-serif; font-size: 18px;color: #333}
ol, ul{list-style: none}
table{border-collapse: collapse; border-spacing: 0}
address{font-style: normal}
a{color: #333; text-decoration: none}
img{border: 0; vertical-align: top}
.hidden{display: block;position: absolute;left: -1000px;width: 1px;height: 1px;overflow: hidden;color:#fff}
#skipNav{position:relative;width: 100%;overflow: hidden;z-index: 60}
#skipNav a{display: block;height:1px;margin-bottom: -1px;font-size: 1.2em;
           color: #fff;overflow: hidden;text-align: center}
#skipNav a:hover, #skipNav a:focus, #skipNav a:active{height: auto;padding:10px 0;background: #1b8ab3}           
.wrap{width:100%; overflow: hidden}
html{scroll-behavior: smooth}
/* font-family: 'Noto Sans KR', sans-serif; */
/* font-family: 'Patrick Hand', cursive; */
/* font-family: 'Noto Serif KR', serif; */

.contentInner{width:1280px;margin: 0 auto;padding:120px 0}
.contentInner2{padding:120px 0}
.topMove{position:fixed;right:30px;bottom:30px;display: block;width:60px;height:60px;background:#184d47;text-align: center;color:#fff;
         line-height: 58px;border-radius: 15px;box-shadow: 3px 3px 10px 5px rgba(0,0,0,.1);z-index: 10}

/* 일반PC */
@media screen and (max-width:1280px){
.contentInner{width:80%}
}
/* 일반테블릿 */
@media screen and (max-width:1024px){
.contentInner{width:80%;padding:100px 0}
.contentInner2{padding:100px 0}
}



/* 소형테블릿 */
@media screen and (max-width:768px){
.contentInner{width:90%;margin:0 auto;padding:80px 0}
.contentInner2{padding:80px 0}
}


/* 모바일 */
@media screen and (max-width:640px){
.contentInner,.contentInner2{padding:60px 0}
}
</style>

