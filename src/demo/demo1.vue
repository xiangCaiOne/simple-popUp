<template>
  <div class="wrap">
    <span class="btn" @click="openDemo2">openDemo2</span>
    <span class="btn2" @click="closeHandle">closeDemo1</span>
  </div>
</template>

<script setup lang="ts">
import popPage from "../components/popUp/index.ts";
import { ref, reactive, toRefs, onMounted, markRaw } from "vue";
const props = defineProps({
  propParams: Object,
});
const { propParams } = toRefs(props);

const openDemo2 = function () {
  popPage
    .openMasking({
      title: "demo2",
      props: { id: 222 },
      popPageStyle: {
        width: "50vw",
        height: "50vh",
        backgroundColor: "red",
      },
      url: markRaw(() => import("./demo2.vue")),
    })
    .then((res) => {
      console.log(res, "res");
    });
};
const closeHandle = function () {
  popPage.removeMasking(propParams.value.resolve, { message: 'demo1 已关闭' });
};
</script>
<style scoped lang="scss">
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  padding: 10px 15px;
  background-color: #eee;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #d5d5d5;
  }
}
.btn2 {
  padding: 10px 15px;
  background-color: #ff1616b8;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    color:#C9CBCD;
  }
}
</style>
