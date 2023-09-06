<template>
  <div>
    demo2
    <span class="btn" @click="closeHandle">closeDeno2</span>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from "vue";
import popPage from "../components/popUp/index.ts";

const props = defineProps({
  propParams: Object,
});
const { propParams } = toRefs(props);
const closeHandle = function () {
  popPage.removeMasking(propParams.value.resolve, { message: 'demo2 已关闭' });
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
