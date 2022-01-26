<template>
  <div class="detail">

  <div class="code">
    <AceCodeEditor :value="code" @change="handleChangeCode"/>
  </div>
  <div class="iframe">
    <Chart :value="options.data" :test="test"/>
  </div>
  </div>
  
</template>
<script setup>
import data from "@/assets/area-rainfall.json"
import AceCodeEditor from "@/components/AceCodeEditor";
import Chart from "@/components/Chart";
import { reactive, ref } from "vue";

const code = ref(data.data.code)

function normalizeCode(code) {
  return eval(code)
}

let option = {};
normalizeCode(code.value)
let options = reactive({data: option})

let test = ref("123")

const handleChangeCode = (data) => {
  console.log(option)
  options.data = normalizeCode(data)
  test.value = "555"
}

</script>

<style>
.detail {
  display: flex;
}

.code {
  width: 600px;
}

.iframe {
  flex: 1;
  min-height: 800px;
}

</style>