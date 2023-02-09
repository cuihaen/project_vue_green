<template>
  <div>
    <div class="subVisual">
        <img src="../assets/visual3.jpg" alt="sub visual img">
        <span>STATION</span>
    </div>
    <div  class="contentInner">
      <div class="summary">
          <h3>STATION</h3>
          <p>한국전력공사에서 운영하는 주위의 전기차 충전소 설치현황을 검색해보세요.</p>
      </div>
      <ul class="select_metro">
        <button type="button" autofocus @click="selected(0)">서울</button>
        <button type="button" @click="selected(1)">경기</button>
        <button type="button" @click="selected(2)">부산</button>
      </ul>
      <div class="searchBox">
        <div class="search">
          <label for="title">상세지역</label>
          <input id="title" type="text" v-model="value" />
          <button @click="search()">검색</button>
        </div>
      </div>
      <div class="result_list">
        <span v-show="message">{{msgtext}}</span>
        <ul>
          <li v-for="(x) in evcharges" :key="x.stnPlace">
            <dl>
              <dt>{{ x.stnPlace }}  <i class="fa-solid fa-building"></i></dt>
              <dd><span><i class="fa-solid fa-location-dot"></i>주소 :</span> {{ x.stnAddr }}</dd>
              <dd><span><i class="fa-solid fa-charging-station"></i>급속충전기 :</span>{{  x.rapidCnt + '대' }} / <span> 완속충전기 :</span> {{ x.slowCnt + '대' }} </dd>
              <dd><span><i class="fa-solid fa-car"></i>지원차종 :</span> {{ x.carType }}</dd>
            </dl>
          </li>
        </ul>
      </div>  
    </div>
  </div>   
</template>

<style>
.select_metro{width:80%;margin:20px auto 50px;border: 1px solid #666}
.select_metro button{width:33.33%;text-align: center;border-right: 1px solid #666;font-size: 1.2em;color:#184d47;font-weight: 500;padding:12px 15px}
.select_metro button:last-child{border:none}

.select_metro button:focus{border-right:none;background: rgba(24, 77, 71,.8);color:#fff;outline: none}

.searchBox{background: #efefef;width:100%;padding:25px 0}
.search{width:400px;margin:0 auto}
.search label{text-align: center;font-weight: 500;width:25%}
.search #title{background: #fff;margin:0 10px;width:60%;padding:5px 10px;border:2px solid #ccc}
.search button{width:15%;background: #184d47;color:#fff;padding:5px 10px}
.search #title:active, .search #title:focus,.search #title:target{outline: none}

.result_list>span{text-align: center;display: block;margin-top:30px}
.result_list ul{border-top:2px solid #184d47;border-bottom: 2px solid #666;margin-top:30px}
.result_list ul li{padding:20px 35px;display: flex;border-bottom:1px solid #ccc}
.result_list ul li dt{font-weight: 600;color:#184d47;font-size: 1.1em;margin-bottom:5px}
.result_list ul li dd{font-size: .95em;margin-top: 5px}
.result_list ul li dd span i{margin-right:8px;color:#96bb7c}
.result_list ul li dd span{font-weight: 500}

</style>

<script>
  import jdata from '../evcharge.json';
  import jdata2 from '../evcharge-gyeonggi.json';
  import jdata3 from '../evcharge-busan.json';

  export default {
    data(){
      return{
        message:false,
        msgtext:'검색 데이터가 없습니다',
        value: '',
        evcharges : jdata,
        ary:[jdata,jdata2,jdata3]
      }
    },
    methods:{
      selected:function(aa){
        // if(aa==0){
        //   this.evcharges = jdata;
        // }else if(aa==1){
        //   this.evcharges = jdata2;
        // }else if(aa==2){
        //   this.evcharges = jdata3;
        // }
        this.evcharges = this.ary[aa];
      },
      search: function(){
        let text = this.value;
        if(text){
          this.evcharges = this.evcharges.filter(function(element){
            return element.stnAddr.includes(text);  //조건에 참이면 객체를 배열로 리턴
          });
          
          if(this.evcharges.length==0){
             this.message=true;
             this.msgtext='검색 데이터가 없습니다';
          }else{
             this.message=true;
             this.msgtext=this.evcharges.length + '개가 검색되었습니다';
          }
        }else{
          alert('검색어를 입력해주세요!');
        } 
      },
      
    }
    ,
  }
  </script>