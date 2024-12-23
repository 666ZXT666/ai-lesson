<template>
    <div>
        <div class="container">
            <!-- 导航 -->
             <!-- html5 语义化标签 -->
            <nav class="nav">
                <div class="time">{{ localTime }}</div>
                <div class="city">切换城市</div>
            </nav>
            <!-- 天气 -->
             <main class="city-info">
                <div class="city-name">{{ weatherData.city }}</div>
                <div class="weather">{{ weatherData.weather }}</div>
                <h2 class="temp"><em>
                    {{ weatherData.temp }}
                </em></h2>
                <div class="detail">
                    <span>风力：{{ weatherData.windPower }} 级别</span>
                    <span>风向：{{ weatherData.windDirection }} </span>
                    <span>空气湿度{{ weatherData.humidity }} </span>
                </div>
             </main>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AMapLoader from '@amap/amap-jsapi-loader';

const localTime = ref('00:00');
const weatherData = ref({
    city: '北京',
    weather: '晴',
    temp: '25',
    windPower: '1',
    windDirection: '东北风',
    humidity: '50'
});

const init_map = () =>{
  AMapLoader.load({
    key:'d3fd23787ffe666cf766c7c17f9dd7b9',
    version:"2.0",
    plugins:['AMap.CitySearch']
  }).then(AMap =>{
        AMap.plugin('AMap.citySearch',function(){
            var citySearch = new AMap.CitySearch();
            citySearch.getLocalCity(
                function(status,result){
                    if(status === 'complete' && result.info === 'OK'){
                        if(result && result.city && result.bounds){
                            var cityInfo = result.city;
                            console.log(cityInfo);
                        }
                    }
                }
            );
        })
    })
}
onMounted(() => {
    setInterval(() => {
                localTime.value = new Date().toLocaleTimeString();
    }, 1000);
})
    init_map();
</script>

<style  scoped>
.container{
    min-height: 100vh;
    background-color: #000;
    opacity: 0.6;
    color: #fff ;
    }
    .city{
        float: right;
    }
    .nav{
        overflow: auto;
        padding: 20px;

    }   
    .time{
        float: left;
    }
    .city-info{
        text-align: center;
    }
    .temp{
        font-size: 26px;
    }
    .tem em{
        font-size: 34px;
    }
</style>