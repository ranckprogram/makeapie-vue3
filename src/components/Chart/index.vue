<template>
  <div class="chart" ref="chartRef"></div>
  {{props.test}}
</template>

<script setup>
import { onMounted, reactive, ref, defineProps, watch, watchEffect } from 'vue';

const props = defineProps({
  value: Object,
  test: String
})

console.log(props)

const chartRef = ref(null)
let chart = reactive({chart: null})
onMounted(() => {
  chart.chart = window.echarts.init(chartRef.value)
  chart.chart.setOption(props.value);
})
watch(() => props.value, () => {
  console.log(2222222222222)
  chart.chart.setOption(props.value);
})

watchEffect(() => props.test, () => {
  console.log(555)
})


watch(() => props.test, () => {
  console.log("string")
})


</script>

<style scoped>
.chart {
  height: 100%;
}
</style>