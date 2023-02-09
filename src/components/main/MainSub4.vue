<template>
    <div class="content4">
        <div class="contentInner">
            <div class="txtBox4">
                <h4>FAQ</h4>
                <p>친환경 전기자동차에 관한 많은 분들이 궁금해하시는 질문들입니다.</p>
                <router-link to="/vue/sub4" class="link"><span class="hidden">VIEW MORE</span><i class="fa-solid fa-plus"></i></router-link>
            </div>
            <v-expansion-panels focusable multiple v-model="panel" :disabled="disabled" >
                <v-expansion-panel>
                <v-expansion-panel-header>하이브리드 자동차도 친환경 자동차인가요?</v-expansion-panel-header>
                <v-expansion-panel-content>
                친환경 자동차란 휘발유나 경유를 사용하지 않거나 적게 사용하는 자동차를 말한다. 친환경 자동차는 네 가지 종류로 구분할 수 있는데 ‘하이브리드 자동차(Hybrid Electric Vehicle, HEV)’, ‘플러그인 하이브리드 자동차(Plug-in Hybrid Electric Vehicle, PHEV)’, ‘전기 자동차(Battery Electric Vehicle, BEV)’, ‘수소연료전지 자동차(Fuel Cell Electric Vehicle, FCEV)’이다.  
                </v-expansion-panel-content>
                </v-expansion-panel>
                 <v-expansion-panel>
                <v-expansion-panel-header>하이브리드 자동차에 대해 정확히 이해가 안가요.</v-expansion-panel-header>
                <v-expansion-panel-content>
                하이브리드 자동차(HEV)’는 화학연료를 쓰는 엔진과 모터 동력을 함께 사용하는 차량이다. 전기차의 부족한 구동력에 엔진 출력으로 힘을 싣고, 배기가스는 내연기관차보다 40% 이상 적게 배출한다. ‘플러그인 하이브리드 자동차(PHEV)’는 하이브리드 자동차와 원리는 같지만 외부 전원을 연결하여 배터리를 충전할 수 있다. 배터리를 가득 충전할 경우 약 40km 정도는 배기가스 배출이 없는 순수 전기 모드로 주행할 수 있다. 
                </v-expansion-panel-content>
                </v-expansion-panel>
                 <v-expansion-panel>
                <v-expansion-panel-header>수소 자동차는 어떤건가요?</v-expansion-panel-header>
                <v-expansion-panel-content>
                수소차로 불리는 ‘수소연료전지 자동차(FCEV : 이하 수소차)’는 수소와 산소의 화학반응으로 얻어진 전기의 힘으로 움직이는 차종이다. 외부의 전기 공급 없이, 전기를 만들어 움직인다는 점에서 전기차와 차이가 있다. 전기를 만드는 과정 중에 소량의 물만 배출할 뿐 오염물질은 발생시키지 않는다. 특히 수소차는 ‘달리는 공기정화기’라고도 불린다. 주행 중에 미세먼지 등 유해물질을 걸러내는 기능도 갖고 있기 때문이다. 충전 시간도 5분 내외로 전기차에 비해 짧다. 하지만 아직 보급이 활발하지 않아 충전소가 부족하다는 단점이 있다.
                </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                <v-expansion-panel-header>전기자동차는 태양광으로도 충전할 수 있나요?</v-expansion-panel-header>
                <v-expansion-panel-content>
                글로벌 자동차 시장이 내연기관에서 친환경 자동차 중심으로 빠르게 재편되면서 태양광 충전 자동차도 속속 등장하고 있다. 태양광이 주 동력원은 아니지만 친환경 자동차에 패널을 탑재하면 주행거리를 늘릴 수 있기 때문이다. 현대자동차는 태양광으로 차량 배터리를 충전해 주행가능거리를 증가시키고 배터리 방전을 막는 ‘솔라루프 시스템’을 쏘나타 하이브리드에 적용했다. 솔라루프 시스템이 적용된 쏘나타 하이브리드는 야외에서 하루 6시간 충전 시 1년간 총 1,300km 넘는 거리를 더 주행할 수 있다. 토요타 자동차는 태양광 패널을 설치한 플러그인 하이브리드 자동차 프리우스를 출시했으며 아우디는 전기 자동차의 루프에 설치된 솔라 패널로 배터리를 충전, 주행 거리를 늘리는 프로젝트에 착수했다. 네덜란드 스타트업 라이트이어는 태양광 자동차 프로토타입 ‘라이트이어 원’을 공개했다. 차량 위 전체 5㎡에 태양광 패널이 설치되어 있으며 발전 효율은 시간당 12km를 달릴 수 있는 수준으로 알려졌다.
                </v-expansion-panel-content>
                </v-expansion-panel>
                 <v-expansion-panel>
                <v-expansion-panel-header>전기자동차 충전소가 생각보다 많지 않아 불편하지는 않나요?</v-expansion-panel-header>
                <v-expansion-panel-content>
                친환경 자동차 사용자가 늘면서 전기·수소차 충전소도 늘고 있다. 전기차 충전소 중에는 태양광발전으로 가동하는 곳도 점점 늘고 있다. 한국의 제주자치도는 신재생에너지 융복합 EV(Electric Vehicle) 충전스테이션을 운영하고 있는데 전기차 10대를 동시 충전 할 수 있다. 폭스바겐은 미국 캘리포니아의 태양광 전기차 충전소 제공업체 ‘EA(Electrify America)’와 손잡고 미국 전역에 전기차충전소를 설치 중이다. 가까운 미래에는 태양광 발전으로 물을 전기분해 하여 수소를 공급하는 수소 충전소 네트워크가 글로벌 전역에 구축될 것으로 기대된다.
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            <div class="imgBox2">
                <img src="../../assets/sub4_main.jpg" alt="sub4">
            </div>
        </div>
    </div>
</template>

<style>
.content4{background: #f2f2f2;margin-bottom: 80px}
.contentInner .txtBox4{overflow: hidden;position:relative;margin-bottom: 30px}
.contentInner .txtBox4 h4{font-size: 2em;font-family: 'Patrick Hand', cursive;color:#184d47;font-weight: bold;margin: 15px 0 10px;text-align: center}
.contentInner .txtBox4 p{line-height: 2em;text-align: justify;font-size:1.1em;text-align: center}
.contentInner .txtBox4 .link{background:#184d47;color:#fff;border-radius: 50%;width:50px;height:50px;font-size: 1.5em;line-height: 44px;
                            display: block;text-align: center;transition:all .3s ease-out;border:2px solid #184d47;position:absolute;top:10px;right:50px}
.contentInner .txtBox4 .link:hover{background: #92b19a;box-shadow: 3px 5px 10px 2px rgba(0,0,0,.1);color:#184d47}
.contentInner .v-expansion-panels{float: left;width:700px}
.contentInner .v-expansion-panel-header{font-size: 1.1em;display: block;text-align: left}
.contentInner .v-expansion-panel-header .v-expansion-panel-header__icon{float: right}
.contentInner .v-expansion-panel-header--active{background: rgba(24, 77, 71,.3)}
.contentInner .v-expansion-panel-content__wrap{padding: 16px 24px 24px;line-height: 1.9em;text-align: justify}
.contentInner .imgBox2{width:520px;height:500px;overflow: hidden;border-radius: 30px;float: right} 
.contentInner .imgBox2 img{object-fit: cover;object-position: right center;width:100%;height:100%}
/* 일반PC */
@media screen and (max-width:1280px){
.contentInner .imgBox2{width:40%;height:550px;overflow: hidden;border-radius: 30px;float: right} 
.contentInner .v-expansion-panels{float: left;width:55%}
}

/* 일반테블릿 */
@media screen and (max-width:1024px){
.contentInner .imgBox2{display: none} 
.contentInner .v-expansion-panels{float: none;width:100%}
.contentInner .v-expansion-panel-header{font-size: 2.3vw}
}
/* 소형테블릿 */
@media screen and (max-width:768px){
.contentInner .v-expansion-panel-header{font-size: 2.8vw}
}

/* 모바일 */
@media screen and (max-width:640px){
.contentInner .v-expansion-panel-header{font-size: 3.2vw}
}
</style>

<script>
export default {
     data: () => ({
      panel: [0],
      disabled: false,
    }),
}
</script>