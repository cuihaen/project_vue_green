<template>
    <header>
        <div class="headerInner">
            <h1 class="logo">
                <span class="hidden">친환경자동차</span>
                <router-link to="/vue/main">
                    <img src="../assets/logo.png" alt="logo">
                </router-link>
            </h1>
            <nav id="gnb">
                <ul>
                    <li><router-link to="/vue/sub1"><h2>ABOUT</h2></router-link></li>
                    <li><router-link to="/vue/sub2"><h2>STATUS</h2></router-link></li>
                    <li><router-link to="/vue/sub3"><h2>STATION</h2></router-link></li>
                    <li><router-link to="/vue/sub4"><h2>FAQ</h2></router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style>
    header{background: #184d47}
    .headerInner{width:1280px;margin:0 auto;padding:10px 0;overflow:hidden}
    .logo{float: left}
    .logo img{width:50px}
    .headerInner #gnb{float:right}
    .headerInner #gnb ul{overflow: hidden}
    .headerInner #gnb ul li{float: left}
    .headerInner #gnb ul li a h2{font-size: 1.4em;color:#fff;line-height: 52px;padding:0 18px;font-family: 'Patrick Hand', cursive;letter-spacing: 2px;transition: all .5s ease-out}
    .headerInner #gnb ul li .router-link-active{position:relative}
    .headerInner #gnb ul li .router-link-active::after{content:'';width:80%;height:2px;background: #fad586;display: block;position:absolute;left:50%;bottom:6px;transform: translateX(-50%);}
    .headerInner #gnb ul li .router-link-active h2{color:#fad586}
    /* 일반PC */
    @media screen and (max-width:1280px){
    .headerInner{width:90%}
    .headerInner #gnb ul li a h2{font-size: 2.8vw}
    }
    /* 일반테블릿 */
    @media screen and (max-width:1024px){
    .headerInner #gnb ul li a h2{font-size: 3.5vw}
    }

    /* 소형테블릿 */
    @media screen and (max-width:768px){
    .headerInner #gnb ul li a h2{font-size: 3.8vw;padding:0 10px}
    }

    /* 모바일 */
    @media screen and (max-width:640px){
    .headerInner #gnb ul li a h2{font-size: 4vw}
    }
</style>

<script>
    export default {
       
    }
</script>