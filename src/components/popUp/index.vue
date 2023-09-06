<template>
  <div id="masking">
    <div class="container" :style="props.popPageStyle">
      <div class="head">
        <div class="close" @click="props.onClose">
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            data-v-ea893728=""
          >
            <path
              fill="currentColor"
              d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="main">
        <component
          :is="child"
          :propParams="props.propParams"
          :title="props.title"
        ></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  SetupContext,
  defineAsyncComponent,
} from "vue";
interface Data {}
export default defineComponent({
  name: "",
  props: {
    url: {
      type: Function,
      default: () => {},
    },
    onClose: {
      type: Function,
      default: () => {},
    },
    popPageStyle: {
      type: Object,
      default: {},
    },
    title: {
      type: String,
    },
    propParams: {
      type: Object,
    },
  },
  setup(props, ctx: SetupContext) {
    const child = ref(null);
    child.value = defineAsyncComponent(() => props.url());
    return {
      props,
      child,
    };
  },
});
</script>

<style scoped lang="scss">
#masking {
  position: fixed;
  z-index: 10;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(69, 75, 81, 0.29);

  .container {
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 90vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: #eee;
    .head {
      position: absolute;
      top: -24px;
      right: 0px;
      width: 24px;
      height: 24px;
      cursor: pointer;
      text-align: center;
      color: #2c2b2b;
      svg {
        width: 24px;
      }
      &:hover {
        color: #000;
        background-color: #eee;
      }
    }

    .main {
      flex: 1;
    }
  }
}
</style>
