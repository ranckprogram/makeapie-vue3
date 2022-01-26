
<template>
  <div class="echartCard">
    <figure @click="handleGoDetail">
      <img src="https://www.makeapie.com/ecg-storage/ec_gallery_thumbnail/xByLjqtaLz.png?v=1518340765980" alt="">
      <figcaption></figcaption>
    </figure>
    <div class="echartCardinfo">
      <span class="author">作者： ranck</span>
      <span class="like">喜欢: 200</span>
      <span class="view">浏览： 20</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const handleGoDetail = () => {
  router.push({name: "echartItem",params: {
    id: 1
  }})
}



</script>

<style scoped>
.echartCard {
  flex: 1;
  max-width: 320px;
  min-width: 240px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.echartCard figure {
  position: relative;
  display: block;
  height: 240px;
  margin: 0;
  overflow: hidden;
  margin-bottom: 12px;
  cursor: pointer;
}
.echartCard figure img {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  
}
.echartCardinfo {
  display: flex;
  color: #666;
  
}
.echartCardinfo .like {
  margin-left: auto;
}
.echartCardinfo .view {
  margin-left: 8px;
}
</style>