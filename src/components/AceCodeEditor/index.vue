<template>
<div><button @click="handleRun">运行</button></div>
  <div class="AceCodeEditor" ref="AceCodeEditorRef"></div>
</template>
<script setup>
import { onMounted, reactive, defineProps, defineEmits, ref } from 'vue';

import ace from 'ace-builds'
import 'ace-builds/webpack-resolver' 
import 'ace-builds/src-noconflict/theme-monokai' // 默认设置的主题
import 'ace-builds/src-noconflict/mode-javascript' // 默认设置的语言模式

let AceCodeEditor = reactive({})
const themePath = 'ace/theme/github';
const modePath= 'ace/mode/html'

const props = defineProps({
  value: {
    type: String,
    default: "",
    required: true
  }
})
const emits = defineEmits(["change"])
const AceCodeEditorRef = ref(null)

onMounted(() => {
  AceCodeEditor = ace.edit(AceCodeEditorRef.value, {
      maxLines: 60, // 最大行数，超过会自动出现滚动条
      minLines: 10, // 最小行数，还未到最大行数时，编辑器会自动伸缩大小
      fontSize: 12, // 编辑器内字体大小
      theme: themePath, // 默认设置的主题
      mode: modePath, // 默认设置的语言模式
      tabSize: 4, // 制表符设置为 4 个空格大小
      // readOnly: true,
      highlightActiveLine: false,
      value: props.value
    })

    console.log(AceCodeEditor)
})

function handleRun() {
  const option = AceCodeEditor.getValue()
  emits("change", option)
}


</script>
