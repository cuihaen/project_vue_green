<template>
<div class="content2">
    <div class="contentInner">
        <div class="txtBox2">
            <h4>STATUS</h4>
            <p>대기오염이 전 지구적 문제로 떠오르면서 최근 몇 년 사이 국내 전기차 시장 또한 빠른 속도로 커지고 있습니다.</p>
        </div>
        <v-container fluid>
            <v-sparkline
            :fill="fill"
            :gradient="selectedGradient"
            :line-width="width"
            :padding="padding"
            :smooth="radius || false"
            :value="value"
            auto-draw
            ></v-sparkline>
        </v-container>
        <router-link to="/vue/sub2" class="link2">VIEW MORE</router-link>
    </div>
</div>
</template>

<style>
.content2{background: #e4e7e2}
.contentInner .txtBox2 h4{font-size: 2em;font-family: 'Patrick Hand', cursive;color:#184d47;font-weight: bold;margin: 15px 0;text-align: center}
.contentInner .txtBox2 p{text-align: center}
.contentInner .link2{padding:8px 20px;background: #184d47;color:#fff;font-weight: 500;border-radius: 10px;margin: 20px auto;
                    display: block;width:200px;text-align: center;transition:all .3s ease-out;border:2px solid #184d47}
.contentInner .link2:hover{background: #92b19a;box-shadow: 3px 5px 10px 2px rgba(0,0,0,.1);color:#184d47}

/* 일반테블릿 */
@media screen and (max-width:1024px){
.contentInner .txtBox2 p{width:90%;margin: 0 auto}
}
</style>

<script>
  const gradients = [
    ['#222'],
    ['green', 'lightgreen'],
    ['#184d47', '#96bb7c']
  ]

  export default {
    data: () => ({
      fill: true,
      selectedGradient: gradients[2],
      gradients,
      padding: 5,
      radius: 10,
      value: [0,14000,25000, 56085, 60952, 65225, 72814, 78660, 83047, 90701, 100229, 135391,137263, 147686, 151991, 159851, 173147, 180966, 191065, 201520, 211677, 222968, 231443, 232970, 241182, 258253,0],
      width: 1,
    }),
  }
</script>