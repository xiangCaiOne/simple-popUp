<template>
  <div><span class="btn" @click="openDemo1">openDemo1</span></div>
</template>

<script setup lang="ts">
import popPage from "./components/popUp/index.ts";
import { ref, reactive, toRefs, onMounted, markRaw } from "vue";

const openDemo1 = function () {
  popPage
    .openMasking({
      title: "demo1",
      // 传递参数
      props: { id: null },
      popPageStyle: {
        width: "90vw",
        height: "90vh",
      },
      url: markRaw(() => import("./demo/demo1.vue")),
    })
    .then((res) => {
      console.log(res, "res");
    })
    .catch((err) => {
      console.log(err, "err");
    });
};
</script>
<style scoped lang="scss">
.btn {
  padding: 10px 15px;
  background-color: #eee;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #d5d5d5;
  }
}
</style>
