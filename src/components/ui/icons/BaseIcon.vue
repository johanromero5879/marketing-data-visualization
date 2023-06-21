<script setup lang="ts">
import { ref, onBeforeMount } from "vue";

export interface BaseIconProps {
  class?: string;
  fill?: boolean;
}

const props = withDefaults(defineProps<BaseIconProps>(), {
  fill: false
})

const options = ref({
  viewBox: "0 0 24 24",
  strokeWidth: "1.5",
  stroke: "currentColor",
  fill: "none"
});

onBeforeMount(() => {
  if (props.fill) {
    options.value.stroke = "none"
    options.value.fill = "currentColor"
  }
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :fill="options.fill"
    :viewBox="options.viewBox"
    :stroke-width="options.strokeWidth"
    :stroke="options.stroke"
    :class="class"
  >
    <slot></slot>
  </svg>
</template>
