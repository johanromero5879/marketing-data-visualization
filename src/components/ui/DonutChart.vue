<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia"
import { ApexOptions } from "apexcharts";

import { useThemeStore } from "../../store/theme"

const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)

export interface DonutChartProps {
  title?: string
  labels?: string[]
  colors?: string[]
  series: number[]
  tooltip?: boolean
}

const props = withDefaults(defineProps<DonutChartProps>(), {
  labels: () => [],
  tooltip: true
});

const options = ref<ApexOptions>({
  legend: {
    show: false,
  },
  title: {
    text: props.title,
    align: "center",
    style: {
      fontWeight: "light"
    }
  },
  theme: {
    mode: theme.value
  },
  colors: props.colors,
  labels: props.labels,
  dataLabels: {
    enabled: false,
  },
  chart: {
    type: "donut",
    fontFamily: "inherit",
    background: "transparent",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    }
  },
  plotOptions: {
    pie: {
      expandOnClick: false
    }
  },
  tooltip: {
    enabled: props.tooltip
  },
  stroke: {
    show: false
  }
});

/* Change theme in chart options when global theme change */
watch(theme, () => {
  options.value = {
    theme: {
      mode: theme.value
    },
    colors: props.colors
  }
})
</script>

<template>
  <apexchart 
    :options="options" 
    :series="series"
  />
</template>