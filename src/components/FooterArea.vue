<template>
    <footer>
        <div class="contentInner3">
            <div class="top">
                <div class="btnBox">
                    <v-btn v-for="icon in icons" :key="icon" icon class="btn"><v-icon> {{ icon }} </v-icon></v-btn>
                </div>
            </div>      
            <v-card-text>
                <img class="logoImg" src="../assets/logo.png" alt="logo">
                <span>COPYRIGHT&copy;2022 KEPCODATA.<br> ALL RIGHTS RESERVED.</span>
                <a class="portfolio" href="#">HAEUN's Portfolio <i class="fa-solid fa-arrow-right"></i></a>
            </v-card-text>
        </div>
    </footer>
</template>

<style>
    footer{color: #fff; font-size: 16px;background: #333; padding: 15px 0;position:relative;overflow: hidden}
    .top{width:1280px;margin: 0 auto}
    .btnBox{padding:20px;overflow: hidden;width:190px;float:right}
    footer::after{content:'';height: 1px;width:100%;background: #666;position:absolute;left: 0;top:70px}
    .btn{padding:0 25px}
    .btn .v-btn__content .v-icon{color:#fff;font-size: 30px}
    footer .v-card__text{overflow: hidden;width:1280px;margin: 0 auto;clear: both;font-size: 1em;padding:25px 0 40px}
    footer .v-card__text .logoImg{width:50px;float: left;margin-right: 20px}
    footer .v-card__text span{float: left}
    footer .v-card__text .portfolio{display: block;width:220px;color:#fff;float:right;text-align: center;padding:15px;background: #184d47;border-radius: 10px;
                                    font-family: 'Patrick Hand', cursive;font-size: 1.2em;transition:all .5s ease-out}
    footer .v-card__text .portfolio:hover{background:#fad586;color:#333}
    /* 일반PC */
    @media screen and (max-width:1280px){
    .contentInner3 .top{width:90%}
    footer .v-card__text{width:90%}
    }
    /* 일반테블릿 */
    @media screen and (max-width:1024px){
    footer .v-card__text span{font-size: 1em}
    }

    /* 소형테블릿 */
    @media screen and (max-width:768px){
    footer .v-card__text span{font-size: .9em}
    }

    /* 모바일 */
    @media screen and (max-width:640px){
    footer .v-card__text span{float:none}
    footer .v-card__text .portfolio{float: none;margin: 20px auto;width:300px}
    }
</style>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-github',
        'mdi-instagram',
        'mdi-linkedin',
      ],
    }),
  }
</script>