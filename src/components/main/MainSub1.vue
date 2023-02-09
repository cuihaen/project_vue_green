<template>
    <div class="contentInner">
        <div class="imgBox"><img src="../../assets/sub1_main.jpg" alt="친환경자동차소개1"></div>
        <div class="txtBox">
            <h4>ABOUT</h4>
            <p>130여 년을 이어온 내연기관차 시대가 서서히 저물고 있다. 환경문제의 심각성이 확산되면서 내연기관차가 환경오염의 주범으로 지목된 탓이다. 세계 여러 나라도 내연기관차 퇴출을 선언하고 있다. 노르웨이는 2025년부터 신규 내연기관차 판매를 금지할 계획이다. 네덜란드와 아일랜드, 슬로베니아, 이스라엘, 인도는 2030년까지, 프랑스와 영국, 싱가포르, 대만은 2040년부터 내연기관 신규판매를 금지하기로 했다. 중국은 2019년부터 내연기관차를 생산하는 신규공장의 건설을 금지했으며 한국은 2025년까지 전기차 113만 대와 충전시설 4만 5,000기를 확충하고, 수소차 20만 대와 충전소 450기를 구축할 계획을 밝혔다. 글로벌 자동차 기업들 역시 이러한 기조에 맞춰 친환경 자동차 개발에 힘을 쏟고 있다. 특히 세계 자동차 기술을 주도하고 있는 메르세데스벤츠는 향후 20년 내 모든 차량을 친환경 자동차로 바꾸겠다고 선언했고, 현대자동차는 2030년 내연기관 신차 출시 중단을 선언했다.</p>
            <router-link to="/vue/sub1" class="link">VIEW MORE</router-link>
        </div>
    </div>
</template>

<style>
.contentInner{overflow: hidden}
.contentInner .imgBox{width:520px;height:500px;overflow: hidden;float: left;margin-right: 50px;border-radius: 30px} 
.contentInner .imgBox img{object-fit: cover;object-position: 50% 50%;width:100%;height:100%}
.contentInner .txtBox{overflow: hidden}
.contentInner .txtBox h4{font-size: 2em;font-family: 'Patrick Hand', cursive;color:#184d47;font-weight: bold;margin: 15px 0 10px}
.contentInner .txtBox p{line-height: 2em;text-align: justify;font-size:1.1em;display: -webkit-box;-webkit-box-orient: vertical;
                        -webkit-line-clamp: 8;overflow: hidden;text-overflow: ellipsis}
.contentInner .txtBox .link{padding:8px 20px;background: #184d47;color:#fff;font-weight: 500;border-radius: 10px;margin: 20px 0;
                            display: block;width:144px;text-align: center;transition:all .3s ease-out;border:2px solid #184d47}
.contentInner .txtBox .link:hover{background: #d6ef7c;box-shadow: 3px 5px 10px 2px rgba(0,0,0,.1);color:#184d47}
/* 일반PC */
@media screen and (max-width:1280px){
.contentInner .imgBox{width:40%} 
}

/* 일반테블릿 */
@media screen and (max-width:1024px){
.contentInner .imgBox{width:50%} 
}

/* 소형테블릿 */
@media screen and (max-width:768px){
.contentInner .imgBox{float: none;width:100%;height:400px;margin: 0 0 10px 0} 
.contentInner .txtBox p{line-height: 2em;text-align: justify;font-size:1.1em;display: -webkit-box;-webkit-box-orient: vertical;
                        -webkit-line-clamp: 6;overflow: hidden;text-overflow: ellipsis}
.contentInner .txtBox .link{margin:30px auto 0;width:200px}
}

/* 모바일 */
@media screen and (max-width:640px){
.contentInner .txtBox p{line-height: 2em;text-align: justify;font-size:1em;display: -webkit-box;-webkit-box-orient: vertical;
                        -webkit-line-clamp: 4;overflow: hidden;text-overflow: ellipsis}
}
</style>

<script>
export default {
    
}
</script>